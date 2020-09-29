import React from "react";
import { TaskItem } from "components/elements";

const RenderItem = ({ data, handleCtaButton, role }) => {
  return (
    <>
      {data.map((task, i) => {
        return (
          <TaskItem
            role={role}
            handleCtaButton={handleCtaButton}
            key={task._id}
            data={task}
            index={i}
          />
        );
      })}
    </>
  );
};

export default RenderItem;
