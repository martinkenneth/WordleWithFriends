import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './views/Main';
import GuesserView from './views/GuesserView';
import CreatorView from './views/CreatorView';

function App() {
  return (
    <Switch>
      <Route path="/guesserView">
        <GuesserView/>
      </Route>
      <Route path="/creatorView">
        <CreatorView/>
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
