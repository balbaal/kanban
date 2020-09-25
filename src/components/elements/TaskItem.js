import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskItem = ({ data, index }) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="task-item shadow-sm rounded"
        >
          <div className="task-item__header">
            <h4 className="task-item__header__title">{data.taskTitle}</h4>
            <h6 className="task-item__header__date">{data.date}</h6>
          </div>
          <p className="task-item__content">{data.taskDescription}</p>
          <h6 className="task-item__owner">by {data.owner}</h6>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
