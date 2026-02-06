import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

export const LanguageSelect = () => {
  const languages = [
    { label: "English", abr: "EN" },
    { label: "Swedish", abr: "SD" },
    { label: "Norwegian", abr: "NB" },
    { label: "Danish", abr: "DA" },
    { label: "Finnish", abr: "FI" },
    { label: "German", abr: "DE" },
    { label: "Spanish", abr: "ES" },
  ];
  const [lang, setLang] = React.useState(languages[0].abr);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {lang}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem
            sx={{ color: "brand.black" }}
            key={language.abr}
            onClick={() => {
              setLang(language.abr);
              handleClose();
            }}
          >
            {language.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
