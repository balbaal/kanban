import React from "react";
import { withRouter } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    <div
      onClick={() => props.history.push(`/project/${props.data.id}`)}
      className="project-item"
    >
      <div className="project-item__overlay"></div>
      <img
        alt={props.data.img}
        src={props.data.img}
        className="project-item__img"
      />
      <h3 className="project-item__title">{props.data.name}</h3>
      <h5 className="project-item__owner">
        <span>by</span> {props.data.owner}
      </h5>
      <span
        data-toggle="modal"
        data-target="#projectModalUpdate"
        onClick={(e) => {
          e.stopPropagation();
          props.onClickEdit(props.data, "update");
        }}
        className="project-item__edit"
      >
        <i className="fa fa-edit" />
      </span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          props.onClickEdit(props.data, "delete");
        }}
        className="project-item__delete"
      >
        <i className="fa fa-trash" />
      </span>
    </div>
  );
};

export default withRouter(ProjectItem);
