const API_ENDPOINT = 'https://api.tinyurl.com/v1/create';
const TOKEN = 'U34cYBFyji7PgxYmMlHRX5b4Y0XG61ZyGVLJtbvT2hz9jBwa4Ttr6H7Q6D5I';

export const shortenUrl = async (url) => {
  const res = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      url,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    return data.result.url;
  } else {
    throw new Error(data.message);
  }
};
