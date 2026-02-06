import { Box, Grid, Typography } from "@mui/material";
import { ContactForm } from "./contact-form";
import { WhatsNext } from "./whats-next";

export const ContactUsContainer = () => {
  return (
    <Box sx={{ backgroundColor: "#f2f5fd", px: 15, py: 8, textAlign: "left" }}>
      <Typography variant="spaceGrotesk" sx={{ fontSize: 38 }}>
        Contact Us!
      </Typography>
      <br />
      <Typography
        variant="spaceGrotesk"
        sx={{ fontSize: 14, color: "gray", fontWeight: 400 }}
      >
        Fill out the form below or schedule a call and we will be in touch. *
        indicates a required field.
      </Typography>

      <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 6 }}>
          <ContactForm />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 6 }}>
          <WhatsNext />
        </Grid>
      </Grid>
    </Box>
  );
};
