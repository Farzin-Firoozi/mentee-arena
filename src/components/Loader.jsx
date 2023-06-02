import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import { ContextStore } from "../context";
const Loader = () => {
  const { loaderStatus } = useContext(ContextStore);
  console.log(loaderStatus);
  return (
    loaderStatus && (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          zIndex: "100",
          position: "fixed",
        }}
      >
        <CircularProgress
          size={68}
          sx={{
            color: "green",
            position: "reletive",
            zIndex: 1,
          }}
        />
      </div>
    )
  );
};

export default Loader;
