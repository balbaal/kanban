import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, placeholder, onChange, name, value }) => {
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></input>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default Input;
