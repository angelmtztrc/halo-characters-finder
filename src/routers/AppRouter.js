import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens
import LoginScreen from '../components/login/LoginScreen';
import SpartanScreen from '../components/spartan/SpartanScreen';
// components
import Navbar from '../components/ui/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={SpartanScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
