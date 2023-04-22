import React, { useState } from 'react';
import Input from './components/Input';
import { shortenUrl } from './components/tinyurlapi';
import './App.css';

function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleUrlShorten = async (url) => {
    try {
      const response = await shortenUrl(url);
      setShortenedUrl(response);
    } catch (error) {
      console.error(error);
      setShortenedUrl('Something went wrong, please try again.');
    }
  };

  return (
    <div className="app">
      <h1>URL Shortener</h1>
      <Input onUrlShorten={handleUrlShorten} shortenedUrl={shortenedUrl} />
    </div>
  );
}

export default App;
