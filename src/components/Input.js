import React, { useState } from 'react';
import { isValidUrl } from './utils/urlUtils';
import { addUrlToFirebase } from './utils/firebaseUtils';

const Input = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidUrl(url)) {
      const newUrl = await addUrlToFirebase(url);
      setShortUrl(`http://localhost:3000/r/${newUrl}`);
      setUrl('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your long URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default Input;
