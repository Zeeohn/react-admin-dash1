import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Yam and Egg Sauce", "08123456789", "5 January 2022", "Approved"),
  createData(
    "Ice cream and Shawarma",
    "09123456789",
    "2 January 2022",
    "Pending"
  ),
  createData(
    "Jollof Rice and Chicken",
    "07012345678",
    "31 December 2021",
    "Approved"
  ),
  createData(
    "Pounded Yam and Egusi",
    "08012345678",
    "27 December 2021",
    "Delivered"
  ),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Food Ordered</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Fat&nbsp;(g)</TableCell>
              <TableCell align="left">Carbs&nbsp;(g)</TableCell>
              <TableCell align="left">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
