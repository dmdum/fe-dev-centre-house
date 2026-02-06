import Logo from "@/assets/logos/DCH-dark.svg?react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

interface TechStackItemProps {
  item: {
    name: string;
  };
}

export const TechStackItem = ({ item }: TechStackItemProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: 2,
        backgroundColor: "#edf3ff",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <SvgIcon component={Logo} sx={{ fontSize: 20 }} inheritViewBox />
        <Typography variant="spaceGrotesk" fontWeight="bold">
          {item.name}
        </Typography>
      </Box>

      {/* NOTE: Can't download materials icons. using this instead. */}
      <Typography variant="body1" sx={{ color: "#6366f1", fontSize: 20, fontWeight: "bold" }}>
        &rarr;
      </Typography>
    </Paper>
  );
};
