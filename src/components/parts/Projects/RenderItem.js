import React from "react";
import { ProjectItem, ProjectButton } from "components/elements";

const RenderItem = () => {
  return (
    <div className="project-render-item">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectButton />
    </div>
  );
};

export default RenderItem;
