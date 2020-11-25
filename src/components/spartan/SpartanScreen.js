import CharactersList from '../characters/CharactersList';

const SpartanScreen = () => {
  return (
    <div>
      <h1>Spartans</h1>
      <div>
        <CharactersList faction="Spartan" />
      </div>
    </div>
  );
};

export default SpartanScreen;
