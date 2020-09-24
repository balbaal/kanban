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
          className="container-fluid pt-3"
          style={{
            height: "calc(100vh - 46px)",
            backgroundColor: "#F6F8FA",
          }}
        >
          <Tasks />
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
