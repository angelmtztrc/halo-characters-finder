import { Redirect, Route, Switch } from 'react-router-dom';

// screens
import CovenantScreen from '../components/covenant/CovenantScreen';
import SpartanScreen from '../components/spartan/SpartanScreen';
import CharacterScreen from '../components/characters/CharacterScreen';
// components
import Navbar from '../components/ui/Navbar';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-10 mx-auto">
        <Switch>
          <Route exact path="/spartans" component={SpartanScreen} />
          <Route exact path="/covenants" component={CovenantScreen} />
          <Route exact path="/character/:id" component={CharacterScreen} />
          <Redirect to="/spartans" />
        </Switch>
      </main>
    </>
  );
};

export default DashboardRoutes;
