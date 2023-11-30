import React from "react";
import "./AuthorTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function AuthorTable() {
  function createData(img, author, functions, status, employed, action) {
    return { img, author, functions, status, employed, action };
  }

  const rows = [
    createData(
      "user1.jpg",
      "Frozen yoghurt",
      "Manager",
      "online",
      "23/04/18",
      <BorderColorIcon />
    ),
    createData(
      "user2.jpg",
      "Ice cream sandwich",
      "Developer",
      "online",
      "11/01/19",
      <BorderColorIcon />
    ),
    createData(
      "user3.jpg",
      "Eclair",
      "Organization",
      "offline",
      "19/09/17",
      <BorderColorIcon />
    ),
    createData(
      "user4.jpg",
      "Cupcake",
      "Developer",
      "online",
      "24/12/08",
      <BorderColorIcon />
    ),
    createData(
      "user5.jpg",
      "Gingerbread",
      "Developer",
      "offline",
      "04/10/21",
      <BorderColorIcon />
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
        <div className="tableHeader"> Authors Table</div>
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
                AUTHOR
              </TableCell>
              <TableCell
                sx={{
                  color: "#a2a7b8",
                  fontSize: " 1rem",
                  fontWeight: "bold",
                }}
                align="right"
              >
                FUNCTION
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
                EMPLOYED
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
                key={row.author}
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
                  <p>{row.author}</p>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#7b809a",
                  }}
                  align="right"
                >
                  {row.functions}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  align="right"
                >
                  {row.status === "online" ? (
                    <div className="userStatus online">{row.status}</div>
                  ) : (
                    <div className="userStatus">{row.status}</div>
                  )}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#7b809a",
                  }}
                  align="right"
                >
                  {row.employed}
                </TableCell>
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
