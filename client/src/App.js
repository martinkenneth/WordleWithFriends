import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Main from "./views/Main";
import GuesserView from "./views/GuesserView";
import CreatorView from "./views/CreatorView";

function App() {
    return (
        <Switch>
            <Route exact path="/:id/:name=:word/guess">
                <GuesserView />
            </Route>
            <Route exact path="/:id/:name=:word">
                <CreatorView />
            </Route>
            <Route exact path="/">
                <Main />
            </Route>
        </Switch>
    );
}

export default App;
