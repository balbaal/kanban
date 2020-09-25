import React from "react";

// Components
import { Header, Tasks, FormTask } from "components/parts";
import { Modal } from "components/elements";

class ProjectDetail extends React.Component {
  state = {
    taskTitle: "",
    taskDescription: "",
    data: [
      {
        taskTitle: "Mobile App User Flow",
        taskDescription:
          "This is the brief description of the This is the brief description of the ",
        date: "19 Aug",
        owner: "Dian Sastro",
        status: "new",
      },
    ],
  };

  handleCreateTask = () => {
    console.log(this.state);
  };

  handleChangeForm = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleRestructureData = (data) => {
    let dataRes = {
      new: [],
      inProgress: [],
      completed: [],
    };

    data.forEach((task) => {
      if (task.status === "new") dataRes.new.push(task);
      else if (task.status === "inProgress") dataRes.inProgress.push(task);
      else dataRes.completed.push(task);
    });

    return dataRes;
  };

  render() {
    const dataRes = this.handleRestructureData(this.state.data);

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
          <Tasks data={dataRes.new} />
          <Tasks data={dataRes.inProgress} isProgress label="In Progress" />
          <Tasks data={dataRes.completed} isProgress label="Completed" />
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
