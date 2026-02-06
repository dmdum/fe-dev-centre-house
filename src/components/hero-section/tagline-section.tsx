import Divi from "@/assets/divider.svg?react";
import { SvgIcon } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const TagLineSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "center", sx: "center", md: "flex-start" },
        py: 10,
        gap: 4,
        textAlign: "left",
        px: 15,
      }}
    >
      <Typography variant="spaceGrotesk" sx={{ fontSize: 50, fontWeight: 700 }}>
        Custom Web Development Company
      </Typography>
      <SvgIcon
        component={Divi}
        sx={{ fontSize: 100, width: "max-content" }}
        inheritViewBox
      />
      <Typography
        variant="spaceGrotesk"
        sx={{
          fontSize: 16,
          fontWeight: 400,
          width: { xs: "100%", md: "50%" },
          textAlign: "left",
        }}
      >
        Dev Centre House Ireland offers a comprehensive range of custom web
        development services provided by skilled, experienced specialists.
        Whether you need to streamline your business workflow, launch a startup,
        or create a top-selling product, we deliver market-leading solutions
        optimised in all the right places. Our flexible collaboration, in-depth
        expertise, and cutting-edge technology ensure the best outcomes from our
        seasoned professionals.
      </Typography>
    </Box>
  );
};
