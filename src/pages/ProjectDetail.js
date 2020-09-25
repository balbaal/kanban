import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

// Components
import { Header, Tasks, FormTask } from "components/parts";
import { Modal } from "components/elements";

class ProjectDetail extends React.Component {
  state = {
    taskTitle: "",
    taskDescription: "",
    data: [
      {
        id: "38888383",
        taskTitle: "Mobile App User Flow",
        taskDescription:
          "This is the brief description of the This is the brief description of the ",
        date: "19 Aug",
        owner: "Dian Sastro",
        status: "new",
      },
      {
        id: "22255",
        taskTitle: "Mobile App User Flow",
        taskDescription:
          "This is the brief description of the This is the brief description of the ",
        date: "20 Aug",
        owner: "Dian Sastro",
        status: "new",
      },
      {
        id: "3355555",
        taskTitle: "Mobile App User Flow",
        taskDescription:
          "This is the brief description of the This is the brief description of the ",
        date: "20 Aug",
        owner: "Dian Sastro",
        status: "inProgress",
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
          <DragDropContext>
            <Tasks id="list-1" data={dataRes.new} />
            <Tasks
              id="list-2"
              data={dataRes.inProgress}
              isProgress
              label="In Progress"
            />
            <Tasks
              id="list-3"
              data={dataRes.completed}
              isProgress
              label="Completed"
            />
          </DragDropContext>
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
