import { Box, Typography } from "@mui/material";
import { TechStackGroup } from "./tech-stack-group";

export const TechStack = () => {
  return (
    <Box sx={{ px: 15, py: 8, textAlign: "left" }}>
      <Typography
        variant="spaceGrotesk"
        sx={{ fontSize: 20, color: "blue" }}
      >
        Technological Stack Expertise
      </Typography>
      <br />
      <Typography variant="spaceGrotesk" sx={{ fontSize: 38 }}>
        Our Web Development Tech Stack
      </Typography>

      <TechStackGroup />
    </Box>
  );
};
