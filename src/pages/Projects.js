import React from "react";
import $ from "jquery";
import axios from "configs/axios";
import jsCookie from "js-cookie";
import jwt from "jsonwebtoken";

// Components
import { Header, ProjectsWrap, FormProject } from "components/parts";
import { Modal } from "components/elements";

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

  handleCreateProject = async () => {
    const token = jsCookie.get("token");
    const tokenDecoded = jwt.decode(token);

    const payload = {
      projectName: this.state.projectName,
      userId: tokenDecoded.id,
    };

    try {
      const resProject = await axios.post("/project", payload);
      this.setState({
        ...this.state,
        projectName: "",
        data: [
          ...this.state.data,
          {
            name: resProject.data.projectName,
            id: resProject.data.id,
            img: "http://picsum.photos/200/300",
          },
        ],
      });

      $("#projectModal").modal("hide");
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  async componentDidMount() {
    const token = jsCookie.get("token");
    const tokenDecoded = jwt.decode(token);

    const resProject = await axios.get(`/project/${tokenDecoded.id}`);
    let projectList = [];

    if (resProject.data.length > 0) {
      projectList = resProject.data.map((item, i) => {
        return {
          name: item.projectName,
          id: item._id,
          img: "https://picsum.photos/200/300",
        };
      });
    }

    this.setState({
      ...this.state,
      data: projectList,
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
