import React from "react";
import RenderItem from "./RenderItem";

const Projects = () => {
  return (
    <div className="project-parent">
      <div className="project-parent__head">
        <h3 className="project-parent__head__title">Project List</h3>
        <div className="project-parent__head__button">
          <button className="btn btn-sm btn-light">Members (12)</button>
          <button className="btn btn-sm btn-light">Board</button>
          <button className="btn btn-sm btn-light">Settings</button>
        </div>
      </div>
      <RenderItem />
    </div>
  );
};

export default Projects;
