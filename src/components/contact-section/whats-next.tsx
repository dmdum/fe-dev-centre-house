import { Box, Typography } from "@mui/material";

export const WhatsNext = () => {
  const steps = [
    "We'll review your request, and start talking about your project.",
    "Our team creates a project proposal with timelines, costs, and team size.",
    "We meet, finalise the agreement, and begin your project.",
  ];

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 600,
        backgroundColor: "white",
        mx: "auto",
        borderRadius: 1,
      }}
    >
      <Typography variant="spaceGrotesk" gutterBottom sx={{ fontSize: 24 }}>
        WHAT'S NEXT?
      </Typography>

      <Box sx={{ mt: 3 }}>
        {steps.map((text, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              mb: index < steps.length - 1 ? 2 : 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mr: 2,
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  border: "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "white",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {index + 1}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" sx={{ pt: 0.5 }}>
              {text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
