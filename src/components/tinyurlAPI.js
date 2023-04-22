const API_TOKEN = 'dmliQtoWoaqMF0R1IAiDwKoOJeDnkQxfLdqlt8ykqyLGZw46nX36NmY4fkAr';

export const shortenUrl = async (url) => {
  try {
    const response = await fetch(`https://api.tinyurl.com/create?url=${url}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    if (data?.ok) {
      return data.result_url;
    } else {
      throw new Error(`Error: ${data.error_code} - ${data.error_description}`);
    }
  } catch (error) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
};
