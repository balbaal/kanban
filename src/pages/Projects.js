import React from "react";

// Components
import { Header, ProjectsWrap } from "components/parts";
import { Modal } from "components/elements";

class Projects extends React.Component {
  handleCreateProject = () => {
    console.log("create project");
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
          create new project
        </Modal>
      </div>
    );
  }
}

export default Projects;
