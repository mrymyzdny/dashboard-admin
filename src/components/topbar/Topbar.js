import React, { useRef } from "react";
import "./Topbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar/Sidebar";
import HomeIcon from "@mui/icons-material/Home";

export default function Topbar(props) {
  const sidebarMobile = useRef(null);

  let isOpen = false;

  const openMenu = () => {
    if (isOpen) {
      sidebarMobile.current.style.display = "none";
      isOpen = false;
    } else {
      sidebarMobile.current.style.display = "flex";
      isOpen = true;
    }
  };

  return (
    <div>
      <div className="topBar">
        <p className="topBarTitle">
          <a href="/">
            <HomeIcon className="homeIcon" fontSize="large" />
          </a>
          / {props.title}
        </p>
        <div className="topBarIcons">
          <AccountCircleIcon fontSize="large" className="topBarIcon" />
          <SettingsIcon fontSize="large" className="topBarIcon" />
          <NotificationsIcon fontSize="large" className="topBarIcon" />

          <div className="mobileMenu" onClick={openMenu}>
            <MenuIcon fontSize="large" />
          </div>
        </div>
      </div>

      <Sidebar ref={sidebarMobile} />
    </div>
  );
}
