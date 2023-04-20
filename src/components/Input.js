import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, value, onChange }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
