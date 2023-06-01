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
          <ListItem>
            <ListItemText>blblablsb</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>blblablsb</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>blblablsb</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>blblablsb</ListItemText>
          </ListItem>
          {/* {true
            ? ["Articles", "Add"].map((text, index) => (
                <NavLink
                  to={`/${text}`}
                  className={classes.items}
                  key={text}
                >
                  <ListItem button>
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <AddRoundedIcon />
                      ) : (
                        <AddRoundedIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </NavLink>
              ))
            : null}
          <NavLink to={true ? `/` : "/SignIn"}>
            {true ? (
              <ListItem onClick={() => console.log("clicked")}>
                <ListItemIcon>
                  {" "}
                  <AddRoundedIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="SignOut" />
              </ListItem>
            ) : (
              <ListItem>
                <ListItemIcon>
                  <AddRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="SignIn" />
              </ListItem>
            )}
          </NavLink> */}
        </List>
      </Box>
    </Box>
  );
};
export default memo(SideMenu);
