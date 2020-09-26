import React from "react";
import { ProjectItem, ProjectButton } from "components/elements";

const RenderItem = ({ data }) => {
  return (
    <div className="project-render-item">
      {data.map((item, i) => {
        return <ProjectItem key={item.id} data={item} />;
      })}
      <ProjectButton />
    </div>
  );
};

export default RenderItem;
