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
      <TableCell>
        <ButtonBase onClick={bookmarkRow}>
          <BookmarkBorderIcon />
          bookmark
        </ButtonBase>
        <ButtonBase onClick={clearbookmarkRow}>
          <BookmarkIcon />
          clear from bookmark
        </ButtonBase>
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
