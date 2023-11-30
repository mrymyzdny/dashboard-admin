import React from "react";
import "./SignUp.css";
import Topbar from "../../components/topbar/Topbar";

export default function SignIn() {
  return (
    <div className="signInWrapper">
      <Topbar title="Sign Up" />
      <form className="form">
        <div className="formHeader">
          <p className="formHeaderTitle">Join us today</p>
          <p className="formHeaderText">
            Enter your email and password to register
          </p>
        </div>
        <input className="formInput" type="text" placeholder="Name"></input>
        <input className="formInput" type="email" placeholder="Email"></input>
        <input
          className="formInput"
          type="password"
          placeholder="Password"
        ></input>
        <input
          className="checkBoxInput"
          type="checkBox"
          value="I agree the"
        ></input>
        <label className="inputLabel">
          I agree the<a href="#0">Terms and Conditions</a>
        </label>
        <button className="btn signInBtn">SIGN UP</button>
        <p className="formCaption">
          Already have an account?<a href="/sign-up"> Sign in</a>
        </p>
      </form>
    </div>
  );
}
