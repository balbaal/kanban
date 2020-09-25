import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, className, title, dataTarget }) => {
  return (
    <button
      data-target={dataTarget}
      data-toggle="modal"
      onClick={onClick}
      className={["btn btn-md", className].join(" ")}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  dataTarget: PropTypes.string,
};

export default Button;
