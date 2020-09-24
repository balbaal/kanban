import React from "react";
import RenderItem from "./RenderItem";
import { Button } from "components/elements";

const Tasks = () => {
  return (
    <div className="task-parent">
      <Button />
      <RenderItem />
    </div>
  );
};

export default Tasks;
