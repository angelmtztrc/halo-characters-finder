import PropTypes from 'prop-types';
import { useMemo } from 'react';

// selectors
import getCharacterByFaction from '../../selectors/getCharacterByFaction';
// components
import CharacterCard from './CharacterCard';

const CharactersList = ({ faction }) => {
  const characters = useMemo(() => getCharacterByFaction(faction), [faction]);

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
