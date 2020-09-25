import React from "react";

const ProjectButton = () => {
  return (
    <button
      className="project-button"
      data-toggle="modal"
      data-target="#projectModal"
    >
      <h4>Create new project</h4>
    </button>
  );
};

export default ProjectButton;
