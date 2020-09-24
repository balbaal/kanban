import React from "react";

// Components
import { Header, ProjectsWrap } from "components/parts";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <ProjectsWrap />
        </div>
      </div>
    );
  }
}

export default Projects;
