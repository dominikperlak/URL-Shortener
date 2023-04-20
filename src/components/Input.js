import React, { useState } from 'react';
import { saveUrlToFirebase } from '../utils/firebaseUtils';
import { validateUrl } from '../utils/urlUtils';
import './Input.css';

function Input() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setLongUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateUrl(longUrl)) {
      const urlData = await saveUrlToFirebase(longUrl, shortUrl);
      setShortUrl(urlData.shortUrl);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid URL');
    }
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={handleInputChange}
          placeholder="Paste your long URL here"
          className="input-field"
        />
        <input
          type="text"
          value={shortUrl}
          onChange={(event) => setShortUrl(event.target.value)}
          placeholder="Custom alias (optional)"
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Shorten URL
        </button>
      </form>
      <div className="error-message">{errorMessage}</div>
    </div>
  );
}

export default Input;
