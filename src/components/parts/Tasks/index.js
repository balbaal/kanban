import React, { useState, useEffect } from "react";
import RenderItem from "./RenderItem";
import { Button, LabelProgress } from "components/elements";
import { Droppable } from "react-beautiful-dnd";
import jsCookie from "js-cookie";
import jwt from "jsonwebtoken";

const Tasks = ({ isProgress, label, data, id, handleCtaButton }) => {
  const [role, setRole] = useState("employee");

  useEffect(() => {
    const token = jsCookie.get("token");
    if (!!token) {
      const tokenDecoded = jwt.decode(token);
      setRole(tokenDecoded.role);
    }
  }, [role]);

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
          ) : role === "employee" ? (
            <Button
              className="btn-primary w-100 mb-4"
              title="+ New Task"
              dataTarget="#taskModal"
            />
          ) : (
            <LabelProgress label="To Do" />
          )}
          <RenderItem
            role={role}
            handleCtaButton={handleCtaButton}
            data={data}
          />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Tasks;
