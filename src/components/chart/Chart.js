import React from "react";
import "./Chart.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data }) {
  return (
    <div className="chartWrapper">
      <div className="chart">
        <ResponsiveContainer width="100%" aspect={4}>
          <BarChart
            className="barChart"
            width={600}
            height={300}
            data={data}
            backgroundColor="#368fee"
          >
            <XAxis dataKey="name" stroke="#FFF" />
            <YAxis />
            <Tooltip
              wrapperStyle={{ width: 100, backgroundColor: "#368fee" }}
            />
            <Legend
              width={100}
              wrapperStyle={{
                top: 40,
                right: 20,
                backgroundColor: "#ccc",
                border: "1px solid #d5d5d5",
                borderRadius: 3,
                lineHeight: "40px",
              }}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
            <Bar dataKey="view" fill="#FFF" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
        <p className="chartTitle">Website Views</p>
        <p className="chartText">Last Campaign Performance</p>
        <div className="chartStatus">
          <AccessTimeIcon />
          <span>campaign sent 2 days ago</span>
        </div>
      </div>
    </div>
  );
}
