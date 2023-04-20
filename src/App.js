import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shorten from './pages/Shorten';
import Redirect from './components/Redirect';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shorten" component={Shorten} />
          <Route exact path="/:id" component={Redirect} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
