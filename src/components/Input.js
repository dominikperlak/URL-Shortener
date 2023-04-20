import React from 'react';

function Input({ type, placeholder, value, onChange, disabled }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled}>
        Shorten
      </button>
    </form>
  );
}

export default Input;
