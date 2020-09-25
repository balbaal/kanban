import React from "react";

// Components
import { Header, Tasks } from "components/parts";

class ProjectDetail extends React.Component {
  render() {
    console.log("this.props.match :>> ", this.props.match);

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
      </div>
    );
  }
}

export default ProjectDetail;
