const TOKEN = 'U34cYBFyji7PgxYmMlHRX5b4Y0XG61ZyGVLJtbvT2hz9jBwa4Ttr6H7Q6D5I';

const shortenUrl = async (url) => {
  const response = await fetch('https://api.tinyurl.com/create', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({url})
  });
  const data = await response.json();
  if (data?.ok) {
    return data.result_url;
  } else {
    throw new Error('Something went wrong, please try again.');
  }
};

export { shortenUrl };
