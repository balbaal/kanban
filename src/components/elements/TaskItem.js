import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskItem = ({ data, index, handleCtaButton }) => {
  return (
    <Draggable draggableId={data._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="task-item shadow-sm rounded"
        >
          <div className="task-item__header">
            <h4 className="task-item__header__title">{data.taskTitle}</h4>
            <h6 className="task-item__header__date">{`${new Date(
              data.createdDate
            ).getDate()}-${new Date(data.createdDate).getMonth()}-${new Date(
              data.createdDate
            ).getFullYear()}`}</h6>
          </div>
          <p className="task-item__content">{data.taskDescription}</p>
          <h6 className="task-item__owner">by {data.owner}</h6>
          <div className="task-item__cta">
            <i
              onClick={() => handleCtaButton(data, "delete")}
              className="fa fa-trash"
            />
            <i className="fa fa-pencil" />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
