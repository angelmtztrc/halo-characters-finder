import { Redirect, useParams } from 'react-router-dom';

// selectors
import getCharacterById from '../../selectors/getCharacterById';

const CharacterScreen = ({ history }) => {
  // get id of the character
  const { id } = useParams();

  // get the character info by id
  const character = getCharacterById(id);

  if (!character) {
    return <Redirect to="/" />;
  }

  // object destructure
  const { description, homeworld, image, rank, specie, name } = character;

  // handle redirect
  const handleRedirect = () => {
    history.length <= 2 ? history.push('/') : history.goBack();
  };

  return (
    <div>
      <button
        onClick={handleRedirect}
        className="flex items-center px-4 py-2 text-blue-300 font-semibold bg-gray-800 rounded-lg uppercase"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>
      <div className="mt-5 w-full font-mono bg-white border border-gray-300 rounded-lg shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full rounded-t-lg object-cover"
        />
        <div className="p-8">
          <div className="mb-10">
            <h1 className="flex text-blue-400 text-4xl font-bold uppercase">
              {name}
            </h1>
            <p className="text-xl font-semibold leading-tight">{rank}</p>
          </div>
          <div className="flex items-center mb-5 space-x-6">
            <p className="text-base">
              <span className="font-semibold">Specie:</span> {specie}
            </p>
            <p className="text-base">
              <span className="font-semibold">Homeworld:</span> {homeworld}
            </p>
          </div>
          <div>
            <p className="text-base font-semibold">Description:</p>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterScreen;
