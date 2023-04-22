const TOKEN = 'dmliQtoWoaqMF0R1IAiDwKoOJeDnkQxfLdqlt8ykqyLGZw46nX36NmY4fkAr';

const shortenUrl = async (url) => {
  const response = await fetch(`https://api.tinyurl.com/create?url=${url}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  if (data?.ok) {
    return data.result_url;
  } else {
    throw new Error('Something went wrong, please try again.');
  }
};

export { shortenUrl };
