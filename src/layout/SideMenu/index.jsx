import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import useStyles from "../../style/SideMenu.style";
import { memo } from "react";
import { NavLink } from "react-router-dom";
const SideMenu = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.root}>
      <Box
        className={classes.side}
        variant="permanent"
        anchor="left"
        marginRight="0"
      >
        <Box
          className={classes.drawer}
          variant="permanent"
        />
        <Divider />
        <List>
          <NavLink
            to={"/"}
            style={{
              textDecoration: "none",
            }}
          >
            <ListItem
              sx={{
                color: "#908B0B",
              }}
            >
              <ListItemText>Characters List</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink
            to={"/search-character"}
            style={{
              textDecoration: "none",
            }}
          >
            <ListItem
              sx={{
                color: "#908B0B",
              }}
            >
              <ListItemText>Search a Character</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink
            to={"/bookmark"}
            style={{
              textDecoration: "none",
            }}
          >
            <ListItem
              sx={{
                color: "#908B0B",
              }}
            >
              <ListItemText>Bookmark Character</ListItemText>
            </ListItem>
          </NavLink>
        </List>
      </Box>
    </Box>
  );
};
export default memo(SideMenu);
