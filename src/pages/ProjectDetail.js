import React from "react";

// Components
import { Header } from "components/parts";

class ProjectDetail extends React.Component {
  render() {
    console.log("this.props.match :>> ", this.props.match);

    return (
      <div>
        <Header />
        Project Detail Page: {this.props.match.params.id}
      </div>
    );
  }
}

export default ProjectDetail;
