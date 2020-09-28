import React from "react";
import qs from "qs";
import { FormLogin } from "components/parts";
import axios from "configs/axios";
import jwt from "jsonwebtoken";
import jsCookie from "js-cookie";

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

  handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const payload = {
      email,
      password,
    };

    try {
      const resLogin = await axios.post("/login", payload);
      // set token
      const in30Minutes = 1 / 48;
      jsCookie.set("token", resLogin.data.token, { expires: in30Minutes });
      localStorage.setItem("token", resLogin.data.token);
      window.location.href = "/projects";
    } catch (error) {
      console.log("error :>> ", error);
    }
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
