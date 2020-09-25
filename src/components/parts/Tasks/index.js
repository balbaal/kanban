import React from "react";
import RenderItem from "./RenderItem";
import { Button, LabelProgress, Modal } from "components/elements";

const handleCreateTask = () => {
  console.log("create task");
};

const Tasks = ({ isProgress, label }) => {
  return (
    <div className="task-parent">
      {isProgress ? (
        <LabelProgress label={label} />
      ) : (
        <Button
          className="btn-primary w-100 mb-4"
          title="+ New Task"
          dataTarget="#taskModal"
        />
      )}
      <RenderItem />
      <Modal onClick={handleCreateTask} idTarget="taskModal" title="New Task">
        task form
      </Modal>
    </div>
  );
};

export default Tasks;
