import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// custom hooks
import useForm from '../../hooks/useForm';
// selectors
import getCharacterByName from '../../selectors/getCharacterByName';
import CharacterCard from '../characters/CharacterCard';

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  // custom hook for form
  const [values, handleChange] = useForm({ text: q });
  const { text } = values;

  // get filtered characters
  const charactersFiltered = useMemo(() => getCharacterByName(q), [q]);

  // on submit
  const handleSearch = e => {
    e.preventDefault();
    history.push(`?q=${text}`);
  };

  return (
    <div className="font-mono">
      <h1 className="text-5xl font-bold">Search</h1>
      <div className="grid gap-6 grid-cols-12 mt-10">
        <div className="col-span-7">
          <h2 className="mb-5 text-xl uppercase">Search a character</h2>
          <form onSubmit={handleSearch} className="w-full">
            <input
              type="text"
              name="text"
              value={text}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Find your character"
              className="px-4 py-2 w-4/5 rounded-l-lg focus:outline-none shadow-lg focus:ring-2"
            />
            <button
              type="submit"
              className="px-4 py-2 w-1/5 text-blue-300 font-semibold bg-gray-800 rounded-r-lg shadow-lg uppercase"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-span-5">
          <h2 className="mb-5 text-xl uppercase">Search result</h2>
          {q === '' ? (
            <p>Search a character</p>
          ) : charactersFiltered.length === 0 ? (
            <p>Character not found</p>
          ) : (
            <div className="grid gap-6 grid-cols-1">
              {charactersFiltered.map(character => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
