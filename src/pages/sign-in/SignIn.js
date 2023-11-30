import React from "react";
import "./SignIn.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Topbar from "../../components/topbar/Topbar";

export default function SignIn() {
  return (
    <div className="signInWrapper">
      <Topbar title="Sign In" />
      <form className="form">
        <div className="formHeader">
          <p className="formHeaderTitle">Sign in</p>
          <div className="formHeaderIcons">
            <FacebookIcon className="formHeaderIcon" fontSize="large" />
            <GitHubIcon className="formHeaderIcon" fontSize="large" />
            <GoogleIcon className="formHeaderIcon" fontSize="large" />
          </div>
        </div>
        <input className="formInput" type="email" placeholder="Email"></input>
        <input
          className="formInput"
          type="password"
          placeholder="Password"
        ></input>
        <input
          className="checkBoxInput"
          type="checkBox"
          value="Remember me"
        ></input>
        <label className="inputLabel">Remember me</label>
        <button className="btn signInBtn">SIGN IN</button>
        <p className="formCaption">
          Don't have an account?<a href="/sign-up"> Sign up</a>
        </p>
      </form>
    </div>
  );
}
