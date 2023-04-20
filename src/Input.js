import React, { useState } from 'react';
import { isValidUrl } from '../utils/urlUtils';
import { addUrlToFirebase } from '../utils/firebaseUtils';

const Input = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Walidacja URLa
    if (!isValidUrl(url)) {
      alert('Podany URL jest nieprawidłowy!');
      return;
    }

    // Dodanie nowego URLa do Firebase i pobranie skróconego URLa
    const shortUrl = await addUrlToFirebase(url);
    setShortUrl(shortUrl);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url-input">Wprowadź URL:</label>
      <input
        id="url-input"
        type="text"
        value={url}
        onChange={handleUrlChange}
        placeholder="https://www.example.com"
      />
      <button type="submit">Skróć URL</button>
      {shortUrl && (
        <p>
          Twój skrócony URL to:{' '}
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </form>
  );
};

export default Input;
