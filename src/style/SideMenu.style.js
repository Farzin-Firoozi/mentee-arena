import { alpha } from "@mui/material";

const drawerWidth = 240;
const useStyles = (theme) => ({
  root: {
    marginLeft: "1rem",
    backgroundColor: theme.palette.common.white,
  },
  side: {
    backgroundColor: alpha(theme.palette.primary.main),
    paddingBottom: "50vh",
    borderRadius: "0.2rem",
    position: "fixed",
  },
  drawer: {
    width: drawerWidth,
    marginTop: "64px", //theme.Appbar.hight,
  },
  drawerPaper: {
    width: "100%",
  },
  items: {
    color: theme.palette.secondary.main,
    //how to style innet icons ?
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
  },
  profile: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.05),
    },
  },
});

export default useStyles;
