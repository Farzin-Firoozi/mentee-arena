import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import TablePaginationActions from "./TablePaginationActions";
import { TableStyle } from "../../style/Table.style";
import {
  Box,
  Stack,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { ContextStore } from "../../context";

export default function BaseTable({ count, rows, headers, children }) {
  const theme = useTheme();
  const classes = TableStyle(theme);
  const { page, setPage, rowsPerPage, setRowsPerPage, pages } =
    useContext(ContextStore);
  console.log("pages", pages);
  return (
    <Box sx={classes.TableBox}>
      <TableContainer
        component={Paper}
        elevation={3}
        sx={{
          marginY: "6rem",
          width: "90%",
          minHeight: "50%",
          padding: "1rem",
        }}
      >
        <Table aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {headers?.map((header, index) => {
                return (
                  <TableCell
                    sx={{
                      padding: "0px",
                      width: "150px",
                    }}
                    align="left"
                    key={index}
                  >
                    <Typography color="#55624C">{header}</Typography>{" "}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {rows?.length > 0 && <TableBody>{children}</TableBody>}
          <TableFooter
            sx={{
              "& tr": {
                color: theme.palette.text.primary.main,
              },
            }}
          >
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[20]}
                colSpan={3}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                pages={pages}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={() => console.log("page changed")}
                onRowsPerPageChange={() => console.log("per page change")}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
