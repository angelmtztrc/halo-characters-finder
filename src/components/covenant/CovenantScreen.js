import CharactersList from '../characters/CharactersList';

const CovenantScreen = () => {
  return (
    <div className="font-mono">
      <h1 className="text-5xl font-bold">Covenants</h1>
      <CharactersList faction="Covenant" />
    </div>
  );
};

export default CovenantScreen;
