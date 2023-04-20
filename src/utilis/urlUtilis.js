const axios = require('axios');

const API_KEY = process.env.REACT_APP_SHRTCODE_API_KEY;

export const shortenUrl = async (urlInput) => {
  try {
    const response = await axios.post(
      `https://api.shrtco.de/v2/shorten?url=${urlInput}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY,
        },
      }
    );
    const urlCode = response.data.result.code;
    return { urlCode };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
