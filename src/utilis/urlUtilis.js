export const generateShortUrl = (id) => {
    return `${window.location.origin}/${id}`;
  };
  
  export const getLongUrl = async (shortUrl) => {
    const urlId = shortUrl.split("/").pop();
    const urlRef = await window.firebase.firestore().collection("urls").doc(urlId).get();
    return urlRef.exists ? urlRef.data() : null;
  };
  