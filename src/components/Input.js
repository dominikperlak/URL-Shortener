import React, { useState } from 'react';

const Input = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(inputValue);
      setError('');
    } catch (err) {
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter URL"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Shorten</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Input;
