import React from 'react';
import { firebase } from '../firebase/firebaseUtils';
import { useParams } from 'react-router-dom';
const Redirect = () => {
  let { shortUrl } = useParams();

  firebase
    .firestore()
    .collection('urls')
    .where('shortUrl', '==', shortUrl)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        window.location = doc.data().url;
      });
    })
    .catch(error => {
      console.error('Error getting document: ', error);
    });

  return <div>Redirecting...</div>;
};

export default Redirect;
