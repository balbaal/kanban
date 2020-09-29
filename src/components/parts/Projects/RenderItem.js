import React, { useState, useEffect } from "react";
import { ProjectItem, ProjectButton } from "components/elements";
import jsCookie from "js-cookie";
import jwt from "jsonwebtoken";

const RenderItem = ({ data, onClickEdit }) => {
  const [role, setRole] = useState("employee");
  useEffect(() => {
    const token = jsCookie.get("token");
    if (!!token) {
      const tokenDecoded = jwt.decode(token);
      setRole(tokenDecoded.role);
    }
  }, [role]);

  return (
    <div className="project-render-item">
      {data.map((item, i) => {
        return (
          <ProjectItem
            role={role}
            onClickEdit={onClickEdit}
            key={item.id}
            data={item}
          />
        );
      })}
      {role === "employee" ? <ProjectButton /> : null}
    </div>
  );
};

export default RenderItem;
