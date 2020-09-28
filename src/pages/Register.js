import React from "react";
import { FormRegister } from "components/parts";
import axios from "configs/axios";

class Login extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    isManager: false,
  };

  handleChangeForm = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]:
        e.target.name === "isManager" ? !this.state.isManager : e.target.value,
    });
  };

  handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, isManager } = this.state;
    const payload = {
      name,
      email,
      password,
      role: isManager ? "manager" : "employee",
    };

    try {
      await axios.post("/register", payload);
      this.props.history.push("/login");
    } catch (error) {
      console.log("error :>> ", error);
    }
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
