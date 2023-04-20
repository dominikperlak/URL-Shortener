import React from "react";

const Input = ({ onSubmit, url, setUrl }) => {
  const onChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={url} onChange={onChange} />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default Input;
