import React from "react";

// Components
import { Header, Tasks, FormTask } from "components/parts";
import { Modal } from "components/elements";

class ProjectDetail extends React.Component {
  state = {
    taskTitle: "",
    taskDescription: "",
  };

  handleCreateTask = () => {
    console.log(this.state);
  };

  handleChangeForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
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
          <FormTask
            taskTitle={this.state.taskTitle}
            taskDescription={this.state.taskDescription}
            onChange={this.handleChangeForm}
          />
        </Modal>
      </div>
    );
  }
}

export default ProjectDetail;
