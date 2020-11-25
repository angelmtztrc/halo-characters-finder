import characters from '../data/characters.json';

const getCharacterByFaction = faction => {
  // valids factions
  const factions = ['Spartan', 'Covenant'];
  // if the user puts a invalid faction
  if (!factions.includes(faction)) {
    throw new Error(`Faction "${faction}" not found`);
  }

  // return all characters of a certain faction
  return characters.filter(character => character.faction === faction);
};

export default getCharacterByFaction;
