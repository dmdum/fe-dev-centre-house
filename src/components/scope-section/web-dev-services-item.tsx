import { Box, Typography } from "@mui/material";

interface ItemProps {
  title: string;
  description: string;
}

export const WebDevServicesItems = ({ item }: { item: ItemProps }) => {
  return (
    <Box>
      <Typography variant="spaceGrotesk" fontWeight="bold" gutterBottom>
        {item.title}
      </Typography>
      <br />
      <Typography
        variant="spaceGrotesk"
        sx={{ color: "#898989", fontWeight: 400 }}
      >
        {item.description}
      </Typography>
    </Box>
  );
};
