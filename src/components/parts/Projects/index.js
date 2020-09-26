import React from "react";
import RenderItem from "./RenderItem";

const Projects = ({ data }) => {
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
      <RenderItem data={data} />
    </div>
  );
};

export default Projects;
