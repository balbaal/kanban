import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import $ from "jquery";
import axios from "configs/axios";
import jsCookie from "js-cookie";
import jwt from "jsonwebtoken";

// Components
import { Header, Tasks, FormTask } from "components/parts";
import { Modal } from "components/elements";

class ProjectDetail extends React.Component {
  state = {
    taskTitle: "",
    taskDescription: "",
    data: { new: [], inProgress: [], completed: [] },
  };

  handleCreateTask = async () => {
    const { taskTitle, taskDescription } = this.state;

    const token = jsCookie.get("token");
    const tokenDecoded = jwt.decode(token);
    const projectId = this.props.match.params.id;

    const payload = {
      taskTitle,
      taskDescription,
      projectId,
      owner: tokenDecoded.name,
    };

    try {
      const resTask = await axios.post("/task", payload);

      const newTask = {
        _id: resTask.data.id,
        taskTitle: resTask.data.taskTitle,
        taskDescription: resTask.data.taskDescription,
        createdDate: resTask.data.createdDate,
        owner: resTask.data.owner,
        status: resTask.data.status,
      };

      this.setState({
        ...this.state,
        taskTitle: "",
        taskDescription: "",
        data: {
          ...this.state.data,
          new: [...this.state.data.new, newTask],
        },
      });

      $("#taskModal").modal("hide");
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  handleChangeForm = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleOnDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    let sourceList = this.state.data[source.droppableId];
    let destinationList = this.state.data[destination.droppableId];

    const draggableTask = sourceList.filter(
      (item) => item._id === draggableId
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

  async componentDidMount() {
    const projectId = this.props.match.params.id;
    const resTaskList = await axios.get(`/task/${projectId}`);

    const resData = this.handleRestructureData(resTaskList.data);
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
