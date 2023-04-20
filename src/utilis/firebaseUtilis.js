import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // konfiguracja Firebase
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export const addUrl = async (shortUrl, longUrl) => {
  try {
    const docRef = await firestore.collection('urls').doc(shortUrl);
    await docRef.set({
      longUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return true;
  } catch (error) {
    console.error('Error adding document: ', error);
    return false;
  }
};

export const getLongUrl = async (shortUrl) => {
  try {
    const docRef = await firestore.collection('urls').doc(shortUrl);
    const doc = await docRef.get();
    if (doc.exists) {
      return doc.data().longUrl;
    } else {
      console.error('No such document');
      return null;
    }
  } catch (error) {
    console.error('Error getting document: ', error);
    return null;
  }
};
