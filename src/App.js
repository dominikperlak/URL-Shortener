import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Input from "./components/Input";
import Redirect from "./components/Redirect";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Input />
          </Route>
          <Route path="/:id">
            <Redirect />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
