import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { shortenUrl } from "./components/bitlyurlapi";

function App() {
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShortenUrl = async (url) => {
    try {
      const shortUrl = await shortenUrl(url);
      setShortenedUrl(shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <Input onShorten={handleShortenUrl} />
      {shortenedUrl && (
        <p>
          Shortened URL:{" "}
          <a href={shortenedUrl} target="_blank" rel="noreferrer">
            {shortenedUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
