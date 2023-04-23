export const shortenUrl = async (url) => {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  const data = await response.json();
  if (data.ok) {
    return data.result.full_short_link;
  } else {
    throw new Error(data.error);
  }
};
