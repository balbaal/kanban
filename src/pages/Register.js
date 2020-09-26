import React from "react";
import { FormRegister } from "components/parts";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeForm = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleRegister = (e) => {
    e.preventDefault();
    console.log("this.state :>> ", this.state);

    this.props.history.push("/projects");
  };

  render() {
    return (
      <FormRegister
        onClick={this.handleRegister}
        onChange={this.handleChangeForm}
        data={this.state}
      />
    );
  }
}

export default Login;
