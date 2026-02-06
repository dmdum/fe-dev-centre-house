import { Button } from "@mui/material";

export const HeaderItems = () => {
  // TODO: Flesh out items
  const items = [
    "About Us",
    "Services",
    "Technologies",
    "Industries",
    "Case Studies",
    "Startup Program",
  ];

  return (
    <>
      {items.map((item) => {
        return (
          <Button
            key={item}
            sx={{ minWidth: "max-content", color: "brand.black" }}
          >
            {item}
          </Button>
        );
      })}
    </>
  );
};
