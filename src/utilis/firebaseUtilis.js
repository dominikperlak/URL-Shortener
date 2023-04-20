import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
  // Your Firebase config here
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const functions = firebase.functions();

export const shortenUrl = async (longUrl) => {
  const response = await functions.httpsCallable('shortenUrl')({ longUrl });
  return response.data.shortId;
};

export const getLongUrl = async (shortId) => {
  const urlRef = await firestore.collection('urls').doc(shortId).get();
  if (urlRef.exists) {
    return urlRef.data().longUrl;
  } else {
    console.log('URL not found');
    return null;
  }
};
