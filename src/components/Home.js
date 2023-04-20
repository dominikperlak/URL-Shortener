import React, { useState } from 'react';
import Input from './Input';
import Loading from './Loading';
import Shorten from './Shorten';

function Home() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch('/api/url/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    setLoading(false);
    setShortUrl(data.shortUrl);
  };

  return (
    <div className="home">
      <h2 className="home__title">Enter a URL to shorten it</h2>
      <Input
        type="text"
        placeholder="Enter URL here"
        value={url}
        onChange={handleInputChange}
        disabled={loading}
      />
      {loading ? (
        <Loading />
      ) : (
        <Shorten shortUrl={shortUrl} disabled={!shortUrl} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default Home;
