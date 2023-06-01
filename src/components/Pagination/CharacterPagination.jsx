import { TableCell, TableRow, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import BaseTable from "./BaseTable";
import CustomTableRow from "./CustomTableRow";
import { ContextStore } from "../../context";

const CharacterPagination = ({ characters, count }) => {
  const { page, rowsPerPage } = useContext(ContextStore);
  useEffect(() => {
    console.log("chaeacters", characters[0]);
  }, []);

  const headers = ["image", "name", "status", "description", "bookmark"];
  return (
    characters.length && (
      <BaseTable
        count={count}
        rows={characters}
        headers={headers}
      >
        {characters.map((row) => (
          <CustomTableRow
            row={row}
            key={row?.id}
          />
        ))}
      </BaseTable>
    )
  );
};

export default CharacterPagination;
