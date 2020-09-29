import React from "react";
import RenderItem from "./RenderItem";
import { Button, LabelProgress } from "components/elements";
import { Droppable } from "react-beautiful-dnd";

const Tasks = ({ isProgress, label, data, id, handleCtaButton }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          className="task-parent"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {isProgress ? (
            <LabelProgress label={label} />
          ) : (
            <Button
              className="btn-primary w-100 mb-4"
              title="+ New Task"
              dataTarget="#taskModal"
            />
          )}
          <RenderItem handleCtaButton={handleCtaButton} data={data} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Tasks;
