import CharactersList from '../characters/CharactersList';

const SpartanScreen = () => {
  return (
    <div className="font-mono">
      <h1 className="text-5xl font-bold">Spartans</h1>
      <CharactersList faction="Spartan" />
    </div>
  );
};

export default SpartanScreen;
