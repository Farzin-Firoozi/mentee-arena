import {
  Box,
  ButtonBase,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useContext, useState } from "react";
import { ContextStore } from "../../context";
const CustomTableRow = ({ row }) => {
  const { setLoaderStatus, setReloadBookmark } = useContext(ContextStore);
  //const [bookedStatus,setBookedStatus] = useState(false)
  const funcLocalstorag = () => {
    let bookmark = [];
    const localBookmark = localStorage?.getItem("bookmarks");
    if (localBookmark) {
      bookmark = JSON.parse(localBookmark);
      bookmark = bookmark.filter((element) => element.id !== row.id);
    }
    return bookmark;
  };
  const bookmarkRow = () => {
    setLoaderStatus(true);
    setReloadBookmark((prev) => !prev);
    setTimeout(() => {
      let bookmark = funcLocalstorag();
      bookmark.push(row);
      localStorage.setItem("bookmarks", JSON.stringify(bookmark));
      setLoaderStatus(false);
    }, 1000);
  };

  const clearbookmarkRow = () => {
    setLoaderStatus(true);
    setReloadBookmark((prev) => !prev);
    setTimeout(() => {
      let bookmark = funcLocalstorag();
      localStorage.setItem("bookmarks", JSON.stringify(bookmark));
      setLoaderStatus(false);
    }, 1000);
  };
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
      <TableCell>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#55624C",
          }}
        >
          {row?.name}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#55624C",
          }}
        >
          {row?.status}
        </Typography>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            color: "#908B0B",
          }}
        >
          <Typography variant="subtitle1">{row?.species}</Typography>
          <Typography variant="subtitle1">{row?.gender}</Typography>
          <Typography variant="subtitle1">{row?.type}</Typography>
          <Typography variant="subtitle1">{row?.location?.name}</Typography>
          <Typography variant="subtitle1">{row?.origin?.name}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        <ButtonBase onClick={bookmarkRow}>
          <BookmarkIcon color="success" />
        </ButtonBase>
        <ButtonBase onClick={clearbookmarkRow}>
          <BookmarkBorderIcon color="error" />
        </ButtonBase>
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
