import React, { useState } from 'react';
import Input from './components/Input';
import { shortenUrl } from './components/tinyurlapi';

function App() {
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (url) => {
    const data = await shortenUrl(url);
    setShortUrl(data.result.url);
  };

  return (
    <div className="App">
      <h1>TinyURL Generator</h1>
      <Input handleSubmit={handleSubmit} />
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
