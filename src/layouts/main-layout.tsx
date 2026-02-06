import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <Header />

      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
};
