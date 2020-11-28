import characters from '../data/characters.json';

const getCharacterByName = name => {
  if (name === '' || name === null) {
    return [];
  }
  return characters.filter(character =>
    character.name.toLowerCase().includes(name.toLowerCase())
  );
};

export default getCharacterByName;
