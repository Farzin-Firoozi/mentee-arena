import { Stack } from "@mui/material";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = ({ children }) => {
  return (
    <Stack>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideMenu />
        {children}
      </div>
    </Stack>
  );
};

export default Layout;
