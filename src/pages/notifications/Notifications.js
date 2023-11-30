import React from "react";
import "./Notifications.css";
import Topbar from "../../components/topbar/Topbar";
import Alerts from "../../components/alerts/Alerts";
import Notification from "../../components/notification/Notification";
import Footer from "../../components/footer/Footer";

export default function Notifications() {
  return (
    <div>
      <Topbar title="Notifications" />
      <Alerts />
      <Notification />
      <Footer />
    </div>
  );
}
