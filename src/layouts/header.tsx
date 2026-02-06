import Logo from "@/assets/logos/DCH-dark.svg?react";
import { AppBar, Box, SvgIcon, Toolbar, Typography } from "@mui/material";
import { BookACall } from "./header-items/book-a-call";
import { HeaderItems } from "./header-items/header-items";
import { LanguageSelect } from "./header-items/language-select";

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        height: 70,
        justifyContent: "center",
        boxShadow: "none",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          minHeight: 70,
          px: 15,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            minWidth: "fit-content",
            maxWidth: "fit-content",
          }}
        >
          <SvgIcon component={Logo} sx={{ fontSize: 40 }} inheritViewBox />
          <Typography variant="spaceGrotesk" sx={{ color: "brand.black" }}>
            Dev Centre House Ireland
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            gap: 2,
            width: "auto",
          }}
        >
          <HeaderItems />
          <BookACall />
          <LanguageSelect />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
