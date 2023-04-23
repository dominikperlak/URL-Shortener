import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { shortenUrl } from './components/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input as AntInput, Button } from 'antd';

function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShortenUrl = async (url) => {
    try {
      const data = await shortenUrl(url);
      setShortenedUrl(data.result.full_short_link);
      toast.success('The URL has been successfully shortened.');
    } catch (error) {
      
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <Input onShorten={handleShortenUrl} />
      {shortenedUrl && (
        <div className="shortened-url-container">
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
