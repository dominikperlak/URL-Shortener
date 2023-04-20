import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Shorten from "./components/Shorten";
import Navbar from "./components/Navbar";
import Redirect from "./components/Redirect";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shorten" component={Shorten} />
          <Route path="/:id" component={Redirect} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
