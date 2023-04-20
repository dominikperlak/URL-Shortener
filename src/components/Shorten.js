import React, { useState } from 'react';
import axios from 'axios';

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.awaymo.com/shorten', { url });
      setShortenedUrl(`https://awaymo.com/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="urlInput">Enter URL to shorten:</label>
          <input
            type="url"
            className="form-control"
            id="urlInput"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://example.com"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Shorten
        </button>
      </form>
      {shortenedUrl && (
        <div className="my-3">
          <h5>Shortened URL:</h5>
          <a href={shortenedUrl}>{shortenedUrl}</a>
        </div>
      )}
    </div>
  );
};

export default Shorten;
