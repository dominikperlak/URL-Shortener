import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Redirect from "./components/Redirect";
import { shortenURL } from "@utils/urlUtils";
import firebase from "@utils/firebaseUtils";


function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleLongUrlChange = (event) => {
    setLongUrl(event.target.value);
  };

  const handleShortUrlChange = (event) => {
    setShortUrl(event.target.value);
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <Input
        longUrl={longUrl}
        shortUrl={shortUrl}
        handleLongUrlChange={handleLongUrlChange}
        handleShortUrlChange={handleShortUrlChange}
      />
      {shortUrl && <Redirect shortUrl={shortUrl} />}
    </div>
  );
}

export default App;
