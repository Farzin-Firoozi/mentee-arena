import { TableCell, TableRow, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import BaseTable from "./BaseTable";
import CustomTableRow from "./CustomTableRow";
import { ContextStore } from "../../context";

const CharacterPagination = ({ count, characters }) => {
  const { page, rowsPerPage } = useContext(ContextStore);
  useEffect(() => {
    characters?.forEach((element) => {
      console.log(element);
    });
  }, []);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - characters.length) : 0;
  const headers = ["image", "name", "status", "description"];
  return (
    <BaseTable
      count={count}
      rows={characters}
      headers={headers}
    >
      {(rowsPerPage > 0
        ? characters.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : characters
      ).map((row) => (
        <CustomTableRow
          row={row}
          key={row?.id}
        />
      ))}

      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </BaseTable>
  );
};

export default CharacterPagination;
