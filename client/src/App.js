import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Main from "./views/Main";
import GuesserView from "./views/GuesserView";
import CreatorView from "./views/CreatorView";

function App() {
    return (
        // Testing Hashed URLs ======================================
        <Switch>
            <Route exact path="/playgame/:encryptedObj">
                <GuesserView />
            </Route>
            <Route exact path="/creator/:encryptedObj">
                <CreatorView />
            </Route>
            <Route exact path="/">
                <Main />
            </Route>
        </Switch>
        // ==========================================================
        // <Switch>
        //     <Route exact path="/:id/:name=:word/guess">
        //         <GuesserView />
        //     </Route>
        //     <Route exact path="/:id/:name=:word">
        //         <CreatorView />
        //     </Route>
        //     <Route exact path="/">
        //         <Main />
        //     </Route>
        // </Switch>
    );
}

export default App;
