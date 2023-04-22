import React, { useState } from 'react';
import { shortenUrl } from './tinyurlapi';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');

  const handleClick = async () => {
    try {
      const shortUrl = await shortenUrl(inputValue);
      setShortenedUrl(shortUrl);
      setError('');
    } catch (error) {
      setError(error.message);
      setShortenedUrl('');
    }
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
      <div className="result">
        {shortenedUrl && (
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        )}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Input;
