import React, { useState } from 'react';

const Input = ({ onShorten }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const shortenedUrl = await onShorten(url);
      console.log('Shortened URL:', shortenedUrl);
      setUrl('');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default Input;
