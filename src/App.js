import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shorten from './components/Shorten';
import Redirect from './components/Redirect';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shorten" element={<Shorten />} />
          <Route path="/:id" element={<Redirect />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
