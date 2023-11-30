import React from "react";
import "./Notification.css";

export default function Notification() {
  return (
    <div className="notification">
      <p className="notificationsTitle">Notifications</p>
      <div className="notificationWrapper">
        <div className="notificationBox">
          <span className="notificationText">NOTIFICATION</span>
        </div>
        <div className="notificationBox">
          <span className="notificationText">NOTIFICATION</span>
        </div>
        <div className="notificationBox">
          <span className="notificationText">NOTIFICATION</span>
        </div>
        <div className="notificationBox">
          <span className="notificationText">NOTIFICATION</span>
        </div>
        <div className="notificationBox">
          <span className="notificationText">NOTIFICATION</span>
        </div>
      </div>
    </div>
  );
}
