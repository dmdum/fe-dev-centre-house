// import { Code } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { WebDevServicesItems } from "./web-dev-services-item";

export const WebDevServices = () => {
  // NOTE: Placeholder data, replace with actual services and icons
  const services = Array.from({ length: 9 }, (_, i) => ({
    title: `Service Title ${i + 1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    // icon: Code,
  }));

  return (
    <Box sx={{ backgroundColor: "#f2f5fd", px: 15, py: 8, textAlign: "left" }}>
      <Typography
        variant="spaceGrotesk"
        sx={{ fontSize: 20, fontWeight: 700, color: "blue" }}
      >
        SCOPE
      </Typography>
      <br />
      <Typography variant="spaceGrotesk" sx={{ fontSize: 38 }}>
        Our Custom Web Development Services
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        {services.map((service, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }} // 1 col mobile, 2 tablet, 3 desktop
          >
            <WebDevServicesItems item={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
