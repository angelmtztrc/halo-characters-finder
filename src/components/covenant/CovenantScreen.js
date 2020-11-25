import CharactersList from '../characters/CharactersList';

const CovenantScreen = () => {
  return (
    <div>
      <h1>Covenants</h1>
      <div>
        <CharactersList faction="Covenant" />
      </div>
    </div>
  );
};

export default CovenantScreen;
