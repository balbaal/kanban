import React from "react";

const TaskItem = () => {
  return (
    <div className="task-item shadow-sm rounded">
      <div className="task-item__header">
        <h4 className="task-item__header__title">Mobile App User Flow</h4>
        <h6 className="task-item__header__date">19 Aug</h6>
      </div>
      <p className="task-item__content">
        This is the brief description of the task
      </p>
      <h6 className="task-item__owner">by Dian Sastro</h6>
    </div>
  );
};

export default TaskItem;
