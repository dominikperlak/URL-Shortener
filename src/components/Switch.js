import { Switch as RouterSwitch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Redirect from "../pages/Redirect";

const Switch = () => {
  return (
    <RouterSwitch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/redirect">
        <Redirect />
      </Route>
    </RouterSwitch>
  );
};

export default Switch;
