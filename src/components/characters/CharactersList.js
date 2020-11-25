import PropTypes from 'prop-types';

// selectors
import getCharacterByFaction from '../../selectors/getCharacterByFaction';
// components
import CharacterCard from './CharacterCard';

const CharactersList = ({ faction }) => {
  const characters = getCharacterByFaction(faction);

  return (
    <div className="grid gap-6 grid-cols-3 mt-10">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

CharactersList.propTypes = {
  faction: PropTypes.string.isRequired
};

export default CharactersList;
