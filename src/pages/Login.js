import React from "react";
import qs from "qs";
import { FormLogin } from "components/parts";

class Login extends React.Component {
  constructor(props) {
    super();

    this.state = {
      email: !!props.location.search
        ? qs.parse(props.location.search, { ignoreQueryPrefix: true }).email
        : "",
      password: "",
    };
  }

  handleChangeForm = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    console.log("this.state :>> ", this.state);

    this.props.history.push("/projects");
  };

  render() {
    return (
      <FormLogin
        onClick={this.handleLogin}
        onChange={this.handleChangeForm}
        data={this.state}
      />
    );
  }
}

export default Login;
