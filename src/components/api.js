export const shortenUrl = async (url) => {
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    if (response.ok) {
      return data.result.full_short_link;
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
