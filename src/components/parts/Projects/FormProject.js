import React from "react";
import { Input } from "components/elements";

const FormProject = ({ projectName, setProjectName }) => {
  return (
    <form>
      <div className="form-group">
        <label>Project Name</label>
        <Input
          type="text"
          placeholder="Input project name . . ."
          onChange={setProjectName}
          name="projectName"
          value={projectName}
        />
      </div>
    </form>
  );
};

export default FormProject;
