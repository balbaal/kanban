import React from "react";
import { Input } from "components/elements";

const FormTask = ({ taskTitle, taskDescription, onChange }) => {
  return (
    <form>
      <div className="form-group">
        <label>Task Title</label>
        <Input
          type="text"
          placeholder="Input task title . . ."
          onChange={onChange}
          name="taskTitle"
          value={taskTitle}
        />
      </div>

      <div className="form-group">
        <label>Task Description</label>
        <Input
          type="text"
          placeholder="Input task description . . ."
          onChange={onChange}
          name="taskDescription"
          value={taskDescription}
        />
      </div>
    </form>
  );
};

export default FormTask;
