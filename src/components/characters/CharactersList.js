import PropTypes from 'prop-types';

// selectors
import getCharacterByFaction from '../../selectors/getCharacterByFaction';

const CharactersList = ({ faction }) => {
  const characters = getCharacterByFaction(faction);

  return (
    <div>
      <h1>List</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

CharactersList.propTypes = {
  faction: PropTypes.string.isRequired
};

export default CharactersList;
