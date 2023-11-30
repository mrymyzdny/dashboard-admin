import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableViewIcon from "@mui/icons-material/TableView";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Sidebar = React.forwardRef((props, ref) => {
  return (
    <div className="sideBar" ref={ref}>
      <div className="sideBarHead">
        <img className="logo" src="./images/logo.png" alt="logo"></img>
        <h1 className="sideBarTitle">Admine Dashboard</h1>
      </div>
      <ul className="sideBarList">
        <NavLink
          to="/"
          className={(link) => (link.isActive ? " link active" : "link")}
        >
          <DashboardIcon fontSize="large" className="sideBarIcon" />
          <li className="sideBarItem">Dashboard</li>
        </NavLink>

        <NavLink
          to="/tables"
          className={(link) => (link.isActive ? "link active" : "link ")}
        >
          <TableViewIcon fontSize="large" className="sideBarIcon" />
          <li className="sideBarItem">Tables</li>
        </NavLink>

        <NavLink
          to="/notifications"
          className={(link) => (link.isActive ? "link active" : "link")}
        >
          <NotificationsIcon fontSize="large" className="sideBarIcon" />
          <li className="sideBarItem">Notifications</li>
        </NavLink>

        <NavLink
          to="/profile"
          className={(link) => (link.isActive ? "link active" : "link")}
        >
          <PersonIcon fontSize="large" className="sideBarIcon" />
          <li className="sideBarItem">Profile</li>
        </NavLink>

        <NavLink
          to="/sign-in"
          className={(link) => (link.isActive ? "link active" : "link")}
        >
          <LoginIcon fontSize="large" className="sideBarIcon" />
          <li className="sideBarItem">Sign In</li>
        </NavLink>

        <NavLink
          to="/sign-up"
          className={(link) => (link.isActive ? "link active" : "link")}
        >
          <AssignmentIcon fontSize="large" className="sideBarIcon" />
          <li className="sideBarItem">Sign Up</li>
        </NavLink>
      </ul>
      <button className="btn sideBarBtn">UPGRADE TO PRO</button>
    </div>
  );
});

export default Sidebar;
