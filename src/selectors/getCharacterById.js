import characters from '../data/characters.json';

const getCharacterById = id => {
  // return the character that matches the id
  return characters.filter(character => character.id === id);
};

export default getCharacterById;
