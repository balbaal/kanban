import React from "react";

class ProjectDetail extends React.Component {
  render() {
    console.log("this.props.match :>> ", this.props.match);

    return <div>Project Detail Page: {this.props.match.params.id}</div>;
  }
}

export default ProjectDetail;
