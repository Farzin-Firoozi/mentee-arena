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
import { Box, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { ContextStore } from "../../context";

export default function BaseTable({ count, rows, headers, children }) {
  const theme = useTheme();
  const classes = TableStyle(theme);
  const { page, setPage, rowsPerPage, setRowsPerPage } =
    useContext(ContextStore);
  // Avoid a layout jump when reaching the last page with empty rows.

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(1);
  };

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
                const align = headers.indexOf(header) !== 0 ? "right" : "left";
                return (
                  <TableCell
                    align={align}
                    key={index}
                  >
                    {" "}
                    <Typography color={theme.palette.text.primary.main}>
                      {header}
                    </Typography>{" "}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {rows?.length > 0 && (
            <TableBody
            // sx={{
            //   "& tr": {
            //     color: theme.palette.text.primary.main,
            //   },
            //   "& tr:nth-of-type(2n)": {
            //     backgroundColor: theme.palette.tableRows.one,
            //   },
            //   "& tr:nth-of-type(2n+1)": {
            //     backgroundColor: theme.palette.tableRows.two,
            //   },
            // }}
            >
              {children}
            </TableBody>
          )}
          <TableFooter
            sx={{
              "& tr": {
                color: theme.palette.text.primary.main,
              },
            }}
          >
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 20, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                //page={0}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
