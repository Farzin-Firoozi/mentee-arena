import { Box, TableCell, TableRow, Typography } from "@mui/material";
import { useEffect } from "react";

const CustomTableRow = ({ row }) => {
  useEffect(() => {
    console.log("row at last", row);
  }, []);
  return (
    <TableRow>
      <TableCell>
        <Box
          component="img"
          sx={{
            height: 150,
            width: 150,
            maxHeight: { xs: 100, md: 150 },
            maxWidth: { xs: 100, md: 150 },
          }}
          alt="The house from the offer."
          src={row?.image}
        />
      </TableCell>
      <TableCell>{row?.name}</TableCell>
      <TableCell>{row?.status}</TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{row?.species}</Typography>
          <Typography variant="h6">{row?.gender}</Typography>
          <Typography variant="h6">{row?.type}</Typography>
          <Typography variant="h6">{row?.location?.name}</Typography>
          <Typography variant="h6">{row?.origin?.name}</Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
