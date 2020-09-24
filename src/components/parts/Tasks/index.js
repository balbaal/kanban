import React from "react";
import RenderItem from "./RenderItem";

const Tasks = () => {
  return (
    <div className="task-parent">
      <button className="task-parent__button btn btn-md btn-primary w-100 mb-4">
        + New Task
      </button>
      <RenderItem />
    </div>
  );
};

export default Tasks;
