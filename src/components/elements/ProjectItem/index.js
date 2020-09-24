import React from "react";

const ProjectItem = () => {
  return (
    <div className="project-item">
      <div className="project-item__overlay"></div>
      <img src="https://picsum.photos/200/300" className="project-item__img" />
      <h3 className="project-item__title">RelaOne Project</h3>
    </div>
  );
};

export default ProjectItem;
