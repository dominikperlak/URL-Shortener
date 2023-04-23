import React from 'react';
import './App.css';
import InputComponent from './components/Input';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <InputComponent />
      
    </div>
  );
}

export default App;
