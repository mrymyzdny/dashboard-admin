import React from "react";
import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import ProfileHead from "../../components/SplitButton";

export default function Profile() {
  return (
    <div>
      <Topbar title="Profile" />
      <div className="profile">
        <div className="profileHead">
          <div className="admonInfo">
            <img
              className="adminProfile"
              src={`${process.env.PUBLIC_URL}/images/admin.jpg`}
              alt="profile"
            ></img>
            <div className="adminBio">
              <p className="adminName">Richard Davis</p>
              <p className="adminRole">CEO / Co-Founder</p>
            </div>
          </div>
          <ProfileHead />
        </div>

        <div className="profileInformation">
          <p className="profileInformationTitle">Profile Information</p>
          <p className="profileInformationText">
            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality).
          </p>
          <p className="infoItem">
            Full Name:
            <span className="info"> Alec M. Thompson</span>
          </p>
          <p className="infoItem">
            Mobile:
            <span className="info"> (44) 123 1234 123</span>
          </p>
          <p className="infoItem">
            Email:
            <span className="info">alecthompson@mail.com</span>
          </p>
          <p className="infoItem">
            Location:
            <span className="info"> USA</span>
          </p>
        </div>
      </div>
    </div>
  );
}
