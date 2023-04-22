import React, { useState } from 'react';
import Input from './components/Input';
import { shortenUrl } from './components/tinyurlAPI';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = await shortenUrl(inputValue);
      setShortUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>TinyURL Generator</h1>
      <Input
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {shortUrl && (
        <div>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
