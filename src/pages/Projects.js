import React from "react";
import $ from "jquery";

// Components
import { Header, ProjectsWrap, FormProject } from "components/parts";
import { Modal } from "components/elements";

const dummyData = [
  {
    id: String(new Date().getTime() + 1),
    img: "https://picsum.photos/200/300",
    name: "RelaOne Project",
  },

  {
    id: String(new Date().getTime() + 2),
    img: "https://picsum.photos/200/300",
    name: "RelaOne Project",
  },

  {
    id: String(new Date().getTime() + 3),
    img: "https://picsum.photos/200/300",
    name: "RelaOne Project",
  },

  {
    id: String(new Date().getTime() + 4),
    img: "https://picsum.photos/200/300",
    name: "RelaOne Project",
  },
  {
    id: String(new Date().getTime() + 5),
    img: "https://picsum.photos/200/300",
    name: "RelaOne Project",
  },
];
class Projects extends React.Component {
  state = {
    projectName: "",
    data: [],
  };

  handleChangeForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCreateProject = () => {
    console.log(this.state);

    const newData = {
      id: new Date().getTime(),
      img: "https://picsum.photos/200/300",
      name: this.state.projectName,
    };

    console.log("this.state.data :>> ", this.state.data);

    this.setState(
      {
        ...this.state,
        projectName: "",
        data: [newData, ...this.state.data],
      },
      () => console.log("this.state >> ", this.state)
    );

    $("#projectModal").modal("hide");
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      data: [...dummyData],
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container mt-3">
          <ProjectsWrap data={this.state.data} />
        </div>
        <Modal
          title="New Project"
          idTarget="projectModal"
          onClick={this.handleCreateProject}
        >
          <FormProject
            projectName={this.state.projectName}
            setProjectName={this.handleChangeForm}
          />
        </Modal>
      </div>
    );
  }
}

export default Projects;
