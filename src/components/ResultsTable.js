import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@material-ui/core";

const ResultsTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Quest</TableCell>
            <TableCell align="right">EP Cost</TableCell>
            <TableCell align="right">Average Points</TableCell>
            <TableCell align="right">Calculated Points per EP</TableCell>
            <TableCell align="right">Efficiency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.epCost}</TableCell>
              <TableCell align="right">{row.avgPoints}</TableCell>
              <TableCell align="right">{row.calcPoints}</TableCell>
              <TableCell align="right">{row.efficiency}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;
