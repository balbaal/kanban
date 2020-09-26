import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type,
  placeholder,
  onChange,
  onClick,
  name,
  value,
  isCheck,
}) => {
  if (isCheck) {
    return (
      <input
        type={type}
        checked={value}
        name={name}
        onChange={onChange}
      ></input>
    );
  } else {
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
  }
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  name: PropTypes.string,
  isCheck: PropTypes.bool,
};

export default Input;
