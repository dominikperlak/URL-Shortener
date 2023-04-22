export const shortenUrl = async (url, token) => {
  try {
    const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${'TOKEN'}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        long_url: url
      })
    });
    const result = await response.json();
    return result.link;
  } catch (error) {
    console.error('Something went wrong:', error);
    return null;
  }
};
