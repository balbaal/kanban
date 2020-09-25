import React from "react";
import RenderItem from "./RenderItem";
import { Button, LabelProgress } from "components/elements";

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
    </div>
  );
};

export default Tasks;
