import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import $ from "jquery";

// Components
import { Header, Tasks, FormTask } from "components/parts";
import { Modal } from "components/elements";

const dummyData = [
  {
    id: "38888383",
    taskTitle: "Mobile App User Flow 1",
    taskDescription:
      "This is the brief description of the This is the brief description of the ",
    date: "19 Aug",
    owner: "Dian Sastro",
    status: "new",
  },
  {
    id: "22255",
    taskTitle: "Mobile App User Flow 2",
    taskDescription:
      "This is the brief description of the This is the brief description of the ",
    date: "20 Aug",
    owner: "Dian Sastro",
    status: "inProgress",
  },
  {
    id: "3355555",
    taskTitle: "Mobile App User Flow 3",
    taskDescription:
      "This is the brief description of the This is the brief description of the ",
    date: "20 Aug",
    owner: "Dian Sastro",
    status: "new",
  },
];

class ProjectDetail extends React.Component {
  state = {
    taskTitle: "",
    taskDescription: "",
    data: { new: [], inProgress: [], completed: [] },
  };

  handleCreateTask = () => {
    const { taskTitle, taskDescription } = this.state;

    const newTask = {
      id: String(new Date().getTime()),
      taskTitle,
      taskDescription,
      date: "26 Sep",
      owner: "Brian Immanuel",
      status: "new",
    };

    this.setState({
      ...this.state,
      taskTitle: "",
      taskDescription: "",
      data: {
        ...this.state.data,
        new: [newTask, ...this.state.data.new],
      },
    });

    $("#taskModal").modal("hide");
  };

  handleChangeForm = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleOnDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    let sourceList = this.state.data[source.droppableId];
    let destinationList = this.state.data[destination.droppableId];

    const draggableTask = sourceList.filter(
      (item) => item.id === draggableId
    )[0];

    sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, draggableTask);

    if (source.droppableId === destination.droppableId) {
      let newState = {
        ...this.state,
        data: {
          ...this.state.data,
          [source.droppableId]: sourceList,
        },
      };

      this.setState(newState);
    } else {
      let newState = {
        ...this.state,
        data: {
          ...this.state.data,
          [source.droppableId]: sourceList,
          [destination.droppableId]: destinationList,
        },
      };

      this.setState(newState);
    }
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

  componentDidMount() {
    const resData = this.handleRestructureData(dummyData);
    this.setState({
      ...this.state,
      data: resData,
    });
  }

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
          <DragDropContext onDragEnd={this.handleOnDragEnd}>
            <Tasks id="new" data={this.state.data.new} />
            <Tasks
              id="inProgress"
              data={this.state.data.inProgress}
              isProgress
              label="In Progress"
            />
            <Tasks
              id="completed"
              data={this.state.data.completed}
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
