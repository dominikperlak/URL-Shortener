import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Redirect from './components/Redirect';

const App = () => {
  const [urlCode, setUrlCode] = useState(null);

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      {urlCode ? <Redirect urlCode={urlCode} /> : <Input setUrlCode={setUrlCode} />}
    </div>
  );
}

export default App;
