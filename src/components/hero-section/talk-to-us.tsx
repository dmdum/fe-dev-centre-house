import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const TalkToUs = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", px: 15, py: 8, textAlign: "left" }}>
      <Grid container spacing={2} direction={{ xs: "column", md: "row" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            variant="spaceGrotesk"
            sx={{ color: "white", fontSize: 30 }}
          >
            Get Custom Websites with Stunning Designs That Work
          </Typography>
          <br />
          <Typography
            variant="spaceGrotesk"
            sx={{ color: "white", fontSize: 16, fontWeight: 400, marginTop: 2 }}
          >
            Get Custom Websites with Stunning Designs That Work
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "auto",
              },
            }}
          >
            Talk to Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
