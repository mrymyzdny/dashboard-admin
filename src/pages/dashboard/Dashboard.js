import React from "react";
import "./Dashboard.css";
import Topbar from "../../components/topbar/Topbar";
import Feature from "../../components/features/Feature";
import ChairIcon from "@mui/icons-material/Chair";
import BarChartIcon from "@mui/icons-material/BarChart";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Chart from "../../components/chart/Chart";
import DashboardProjects from "../../components/dashboard-projects/DashboardProjects";
import Footer from "../../components/footer/Footer";
import { xAxisData } from "../../datas";

export default function Dashboard(props) {
  return (
    <div>
      {/* Topbar */}
      <Topbar title="Dashboard" />

      {/* features */}
      <div className="features">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
            <Feature
              icon=<ChairIcon fontSize="large" />
              title="Bookings"
              num="281"
              caption="than lask week"
              percent="+55%"
              color="black"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
            <Feature
              icon=<BarChartIcon fontSize="large" />
              title="Today's Users"
              num="2,300"
              caption="than lask month"
              percent="+3%"
              color="blue"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
            <Feature
              icon=<StoreIcon fontSize="large" />
              title="Revenue"
              num="34k"
              caption="than yesterday"
              percent="+1%"
              color="green"
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
            <Feature
              icon=<PersonAddIcon fontSize="large" />
              title="Followers"
              num="+91"
              caption="Just updated"
              color="pink"
            />
          </div>
        </div>
      </div>

      {/* chart */}
      <Chart grid data={xAxisData} dataKey="view" />

      {/* Projects */}
      <DashboardProjects />

      {/* Footer */}
      <Footer />
    </div>
  );
}
