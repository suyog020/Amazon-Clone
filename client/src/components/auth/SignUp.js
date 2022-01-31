import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [udata, setudata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    password1: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setudata(() => {
      return {
        ...udata,
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
            <h1>Create account</h1>
            <div className="form_data">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.name}
                name="name"
                id="name"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.email}
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile number</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.mobile}
                name="mobile"
                id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={adddata}
                value={udata.password}
                name="password"
                placeholder="At least 6 characters"
                id="password"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password1">Password again</label>
              <input
                type="password"
                onChange={adddata}
                value={udata.password1}
                name="password1"
                id="password1"
              />
            </div>
            <button className="signin_btn">Continue</button>
            <div className="signup_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
