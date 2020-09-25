import React from "react";
import RenderItem from "./RenderItem";
import { Button, LabelProgress } from "components/elements";

const Tasks = ({ isProgress, label }) => {
  return (
    <div className="task-parent">
      {isProgress ? <LabelProgress label={label} /> : <Button />}
      <RenderItem />
    </div>
  );
};

export default Tasks;
