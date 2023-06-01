import {
  Box,
  ButtonBase,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const CustomTableRow = ({ row }) => {
  const funLocalstorag = () => {
    let bookmark = [];
    const localBookmark = localStorage?.getItem("bookmarks");
    if (localBookmark) {
      bookmark = JSON.parse(localBookmark);
      bookmark = bookmark.filter((element) => element.id !== row.id);
    }
    return bookmark;
  };
  const bookmarkRow = () => {
    let bookmark = funLocalstorag();
    bookmark.push(row);
    localStorage.setItem("bookmarks", JSON.stringify(bookmark));
  };

  const clearbookmarkRow = () => {
    let bookmark = funLocalstorag();
    localStorage.setItem("bookmarks", JSON.stringify(bookmark));
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
        </ButtonBase>
        <ButtonBase onClick={clearbookmarkRow}>
          <BookmarkIcon />
        </ButtonBase>
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
