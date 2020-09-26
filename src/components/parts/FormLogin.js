import React from "react";

// Component
import { Input, Button } from "components/elements";

const FormLogin = () => {
  return (
    <form class="form-signin">
      <img
        class="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

      <div className="form-group w-100">
        <Input
          type="email"
          placeholder="Email address . . ."
          name="email"
          value=""
          onChange={() => {}}
        />
      </div>

      <div className="form-group w-100">
        <Input
          type="password"
          placeholder="Password . . ."
          name="password"
          value=""
          onChange={() => {}}
        />
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <Button
        title="Sign In"
        className="btn-primary w-100"
        onClick={() => {}}
      />
      <p class="mt-5 mb-3 text-muted">Management Task App | © 2020</p>
    </form>
  );
};

export default FormLogin;
