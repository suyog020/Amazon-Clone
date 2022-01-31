import React from "react";
import "./auth.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [logdata, setdata] = useState({
    email: "",
    password: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setdata(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  return (
    <section>
      <div className="auth_container">
        <div className="auth_header">
          <img src="./blacklogoamazon.png" alt="" />
        </div>
        <div className="auth_form">
          <form>
            <h1>Sign In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={adddata}
                value={logdata.email}
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                onChange={adddata}
                value={logdata.password}
                name="password"
                placeholder="At least 6 characters"
                id="password"
              />
            </div>
            <button className="signin_btn">Continue</button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New To Amazon?</p>
          <NavLink to="/register">
            <button>Create your Amazon account </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
