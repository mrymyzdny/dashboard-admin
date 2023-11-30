import React from "react";
import "./ProjectsTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Completion from "../completion/Completion";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function ProjectsTable() {
  function createData(img, project, budget, status, completion, action) {
    return { img, project, budget, status, completion, action };
  }

  const rows = [
    createData(
      "asana.svg",
      "Asana",
      "$2,500",
      "working",
      <Completion completed="23" />,
      <MoreVertIcon fontSize="large" />
    ),
    createData(
      "github.svg",
      "Github",
      "$5,000",
      "done",
      <Completion completed="100" />,
      <MoreVertIcon fontSize="large" />
    ),
    createData(
      "atlassian.svg",
      "Atlassian",
      "$3,400",
      "canceled",
      <Completion completed="18" />,
      <MoreVertIcon fontSize="large" />
    ),
    createData(
      "spotify.svg",
      "Spotify",
      "$14,000",
      "working",
      <Completion completed="57" />,
      <MoreVertIcon fontSize="large" />
    ),
    createData(
      "slack.svg",
      "Slack",
      "$1,000",
      "working",
      <Completion completed="88" />,
      <MoreVertIcon fontSize="large" />
    ),
    createData(
      "jira.svg",
      "Jira",
      "$2,300",
      "done",
      <Completion completed="100" />,
      <MoreVertIcon fontSize="large" />
    ),
  ];

  return (
    <div>
      <TableContainer
        sx={{
          padding: "2rem",
          borderRadius: "1.5rem",
          marginTop: "3rem",
        }}
        component={Paper}
      >
        <div className="tableHeader"> Projects Table</div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#a2a7b8",
                  fontSize: " 1rem",
                  fontWeight: "bold",
                }}
              >
                PROJECT
              </TableCell>
              <TableCell
                sx={{
                  color: "#a2a7b8",
                  fontSize: " 1rem",
                  fontWeight: "bold",
                }}
                align="right"
              >
                BUDGET
              </TableCell>
              <TableCell
                sx={{
                  color: "#a2a7b8",
                  fontSize: " 1rem",
                  fontWeight: "bold",
                }}
                align="right"
              >
                STATUS
              </TableCell>
              <TableCell
                sx={{
                  color: "#a2a7b8",
                  fontSize: " 1rem",
                  fontWeight: "bold",
                }}
                align="right"
              >
                COMPLETION
              </TableCell>
              <TableCell
                sx={{
                  color: "#a2a7b8",
                  fontSize: " 1rem",
                  fontWeight: "bold",
                }}
                align="right"
              >
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.project}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className="authorTablecell"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#354667",
                  }}
                  component="th"
                  scope="row"
                >
                  <img
                    className="userlogo"
                    src={`${process.env.PUBLIC_URL}/images/${row.img}`}
                    alt="user"
                  ></img>
                  <p>{row.project}</p>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#7b809a",
                  }}
                  align="right"
                >
                  {row.budget}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#7b809a",
                  }}
                  align="right"
                >
                  {row.status}
                </TableCell>
                <TableCell align="right">{row.completion}</TableCell>
                <TableCell
                  sx={{ cursor: "pointer", color: "#7b809a" }}
                  align="right"
                >
                  {row.action}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
