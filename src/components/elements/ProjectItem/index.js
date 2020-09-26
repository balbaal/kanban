import React from "react";
import { withRouter } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    <div
      onClick={() => props.history.push(`/project/${props.data.id}`)}
      className="project-item"
    >
      <div className="project-item__overlay"></div>
      <img src={props.data.img} className="project-item__img" />
      <h3 className="project-item__title">{props.data.name}</h3>
    </div>
  );
};

export default withRouter(ProjectItem);
