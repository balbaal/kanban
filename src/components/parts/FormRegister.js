import React from "react";
import { withRouter } from "react-router-dom";

// Component
import { Input, Button } from "components/elements";

const FormLogin = ({ onChange, data, onClick, history }) => {
  return (
    <form className="form-signin">
      <img
        className="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 className="h3 mb-3 font-weight-normal">Register new user</h1>

      <div className="form-group w-100">
        <Input
          type="name"
          placeholder="Name . . . "
          name="name"
          value={data.name}
          onChange={onChange}
        />
      </div>

      <div className="form-group w-100">
        <Input
          type="email"
          placeholder="Email address . . ."
          name="email"
          value={data.email}
          onChange={onChange}
        />
      </div>

      <div className="form-group w-100">
        <Input
          type="password"
          placeholder="Password . . ."
          name="password"
          value={data.password}
          onChange={onChange}
        />
      </div>

      <div className="checkbox mb-3">
        <label>
          <Input
            value={data.isManager}
            onChange={onChange}
            isCheck
            type="checkbox"
            name="isManager"
          />{" "}
          Manager
        </label>
      </div>

      <Button
        title="Register"
        className="btn-primary w-100"
        onClick={onClick}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          history.push("/login");
        }}
        title="already have account ?"
        className="btn-link w-100"
      />
      <p className="mt-5 mb-3 text-muted">Management Task App | © 2020</p>
    </form>
  );
};

export default withRouter(FormLogin);
