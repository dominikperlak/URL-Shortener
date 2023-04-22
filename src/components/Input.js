import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter URL here...'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type='submit'>Shorten URL</button>
    </form>
  );
};

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
