import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./views/Main";

function App() {
    return (
        <Switch>
            <Route path="/examples">
                <Main />
            </Route>
            {/* you can also use redirect to force a route to another route */}
            <Route path="/">
                <Redirect to="/examples" />
            </Route>
        </Switch>
    );
}

export default App;
