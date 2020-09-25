import React from "react";
import { withRouter } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    <div
      onClick={() => props.history.push(`/project/3`)}
      className="project-item"
    >
      <div className="project-item__overlay"></div>
      <img src="https://picsum.photos/200/300" className="project-item__img" />
      <h3 className="project-item__title">RelaOne Project</h3>
    </div>
  );
};

export default withRouter(ProjectItem);
