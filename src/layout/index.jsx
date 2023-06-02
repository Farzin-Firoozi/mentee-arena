import { Stack } from "@mui/material";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Loader from "../components/Loader";

const Layout = ({ children }) => {
  return (
    <Stack>
      <Loader />
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
