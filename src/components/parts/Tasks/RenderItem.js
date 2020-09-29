import React from "react";
import { TaskItem } from "components/elements";

const RenderItem = ({ data, handleCtaButton }) => {
  return (
    <>
      {data.map((task, i) => {
        return (
          <TaskItem handleCtaButton key={task._id} data={task} index={i} />
        );
      })}
    </>
  );
};

export default RenderItem;
