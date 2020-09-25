import React from "react";

// Components
import { Header, ProjectsWrap, FormProject } from "components/parts";
import { Modal } from "components/elements";

class Projects extends React.Component {
  state = {
    projectName: "",
  };

  handleChangeForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCreateProject = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container mt-3">
          <ProjectsWrap />
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
