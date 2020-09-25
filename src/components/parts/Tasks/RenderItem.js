import React from "react";
import { TaskItem } from "components/elements";

const RenderItem = ({ data }) => {
  return (
    <>
      {data.map((task, i) => {
        return <TaskItem key={i} data={task} index={i} />;
      })}
    </>
  );
};

export default RenderItem;
