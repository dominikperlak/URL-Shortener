export const shortenUrl = async (url) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://api.rebrandly.com/v1/links/new?apikey=${API_KEY}&destination=${encodeURIComponent(
      url
    )}`;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data.shortUrl;
    } catch (error) {
      console.error('Error shortening URL: ', error);
      return null;
    }
  };
  
  export const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      console.error('Error validating URL: ', error);
      return false;
    }
  };
  