import React, { useEffect, useState } from "react";
import { getLongUrl } from "../utils/urlUtils";

const Redirect = ({ shortUrl }) => {
  const [longUrl, setLongUrl] = useState(null);

  useEffect(() => {
    const fetchLongUrl = async () => {
      const urlData = await getLongUrl(shortUrl);
      setLongUrl(urlData?.url || "/");
      window.location.replace(urlData?.url || "/");
    };

    fetchLongUrl();
  }, [shortUrl]);

  return (
    <div>
      <h2>Redirecting...</h2>
      {longUrl && <p>Redirecting to: {longUrl}</p>}
    </div>
  );
};

export default Redirect;
