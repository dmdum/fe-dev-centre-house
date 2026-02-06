import { Box, Grid, Typography } from "@mui/material";
import { TechStackItem } from "./tech-stack-item";

export const TechStackGroup = () => {
  return (
    <Box>
      {platformData.map((platform, index) => {
        return (
          <Box key={index} sx={{ my: 5 }}>
            <Typography variant="spaceGrotesk" sx={{ mb: 5 }}>
              {platform.title}
            </Typography>

            <Grid container spacing={2}>
              {platform.items.map((item) => (
                <Grid
                  key={item.name}
                  size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }}
                  sx={{ display: "flex" }}
                >
                  <TechStackItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

// TODO: Replace with actual data
const platformData = [
  {
    title: 'Front-end',
    items: [
      { name: 'Lorem Framework A' },
      { name: 'Lorem Framework B' },
      { name: 'Lorem Framework C' },
      { name: 'Lorem Scripting' },
    ],
  },
  {
    title: 'Back-end',
    items: [
      { name: 'Lorem Lang A' },
      { name: 'Lorem Plat B' },
      { name: 'Lorem Lang C' },
      { name: 'Lorem Lang D' },
      { name: 'Lorem Run E' },
      { name: 'Lorem Eng F' },
      { name: 'Lorem Lang G' },
      { name: 'Lorem Lang H' },
      { name: 'Lorem Lang I' },
      { name: 'Lorem Lang J' },
      { name: 'Lorem Eng K' },
      { name: 'Lorem Leg L' },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'Lorem OS A' },
      { name: 'Lorem OS B' },
      { name: 'Lorem Cross C' },
      { name: 'Lorem Cross D' },
    ],
  },
  {
    title: 'Platforms',
    items: [
      { name: 'Lorem Cloud A' },
      { name: 'Lorem Cloud B' },
      { name: 'Lorem Cloud C' },
      { name: 'Lorem ERP D' },
      { name: 'Lorem CRM E' },
    ],
  },
];

