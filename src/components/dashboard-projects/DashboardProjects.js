import * as React from "react";
import "./DashboardProjects.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Completion from "../completion/Completion";

function createData(img, companies, members, budget, completion) {
  return { img, companies, members, budget, completion };
}

const rows = [
  createData(
    "logo-xd.svg",
    "Material UI XD Version",
    4,
    "$14,000",
    <Completion completed="23" />
  ),
  createData(
    "atlassian.svg",
    "Add Progress Track",
    2,
    "$3,000",
    <Completion completed="100" />
  ),
  createData(
    "slack.svg",
    "Fix Platform Errors",
    2,
    "$20,500",
    <Completion completed="10" />
  ),
  createData(
    "spotify.svg",
    "Launch our Mobile App",
    4,
    "$500",
    <Completion completed="58" />
  ),
  createData(
    "jira.svg",
    "Add the New Pricing Page",
    1,
    "$2,000",
    <Completion completed="93" />
  ),
  createData(
    "invision.svg",
    "Redesign New Online Shop",
    1,
    "$34,000",
    <Completion completed="12" />
  ),
];

export default function DashboardProjects() {
  return (
    <TableContainer
      sx={{
        padding: "2rem",
        borderRadius: "1.5rem",
      }}
      component={Paper}
    >
      <p className="dashboardProjectsTitle">Projects</p>
      <Table className="table" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#a2a7b8",
                fontSize: " 1rem",
                fontWeight: "bold",
              }}
              align="left"
            >
              COMPANIES
            </TableCell>
            <TableCell
              sx={{
                color: "#a2a7b8",
                fontSize: " 1rem",
                fontWeight: "bold",
              }}
              align="left"
            >
              MEMBERS
            </TableCell>
            <TableCell
              sx={{
                color: "#a2a7b8",
                fontSize: " 1rem",
                fontWeight: "bold",
              }}
              align="left"
            >
              BUDGET
            </TableCell>
            <TableCell
              sx={{
                color: "#a2a7b8",
                fontSize: " 1rem",
                fontWeight: "bold",
              }}
              align="left"
            >
              COMPLETION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.companies}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="tableCell"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#354667",
                }}
                align="left"
              >
                <img
                  className="tableLogo"
                  src={`${process.env.PUBLIC_URL}/images/${row.img}`}
                  alt="img"
                ></img>
                <p>{row.companies}</p>
              </TableCell>

              <TableCell
                sx={{ fontSize: "1.5rem", color: "#354667" }}
                align="left"
              >
                {row.members}
              </TableCell>

              <TableCell
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#7b809a",
                }}
                align="left"
              >
                {row.budget}
              </TableCell>

              <TableCell align="left">{row.completion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
