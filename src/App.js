import React, { useState } from "react";
import Input from "./components/Input";
import Redirect from "./components/Redirect";

import { getFirebaseConfig } from "./utils/firebaseUtils";
import { generateShortUrl } from "./utils/urlUtils";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

import "./App.css";

firebase.initializeApp(getFirebaseConfig());
firebase.analytics();

const App = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const urlData = {
      url,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    const docRef = await firebase.firestore().collection("urls").add(urlData);
    setShortUrl(generateShortUrl(docRef.id));
    setUrl("");
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <Input onSubmit={onSubmit} url={url} setUrl={setUrl} />
      {shortUrl && <Redirect shortUrl={shortUrl} />}
    </div>
  );
};

export default App;
