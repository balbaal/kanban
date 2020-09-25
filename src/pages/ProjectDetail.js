import React from "react";

// Components
import { Header, Tasks } from "components/parts";
import { Modal } from "components/elements";

class ProjectDetail extends React.Component {
  handleCreateTask = () => {
    console.log("create task");
  };

  render() {
    console.log("this.props.match :>> ", this.props.match);

    return (
      <div>
        <Header />
        <div
          className="container-fluid pt-3 d-flex flex-row overflow-auto"
          style={{
            height: "calc(100vh - 46px)",
            backgroundColor: "#F6F8FA",
            margin: "0 -15px",
          }}
        >
          <Tasks />
          <Tasks isProgress label="In Progress" />
          <Tasks isProgress label="Completed" />
        </div>
        <Modal
          onClick={this.handleCreateTask}
          idTarget="taskModal"
          title="New Task"
        >
          task form
        </Modal>
      </div>
    );
  }
}

export default ProjectDetail;
