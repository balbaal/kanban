import React from "react";

const LabelProgress = ({ label }) => {
  return (
    <label
      className="btn btn-md w-100 mb-4 text-primary"
      style={{ backgroundColor: "#ECEAFA" }}
    >
      {label} <span style={{ color: "gray" }}>(3)</span>
    </label>
  );
};

export default LabelProgress;
