import { Redirect, Route, Switch } from 'react-router-dom';

// screens
import CovenantScreen from '../components/covenant/CovenantScreen';
import SpartanScreen from '../components/spartan/SpartanScreen';
import CharacterScreen from '../components/characters/CharacterScreen';
import SearchScreen from '../components/search/SearchScreen';
// components
import Navbar from '../components/ui/Navbar';

const DashboardRoutes = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto my-10">
        <Switch>
          <Route exact path="/spartans" component={SpartanScreen} />
          <Route exact path="/covenants" component={CovenantScreen} />
          <Route exact path="/character/:id" component={CharacterScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/spartans" />
        </Switch>
      </main>
    </div>
  );
};

export default DashboardRoutes;
