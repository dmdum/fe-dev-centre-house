import { createTheme } from '@mui/material/styles';

// tells TS that 'spaceGrotesk' is a valid variant
declare module '@mui/material/styles' {
  interface TypographyVariants {
    spaceGrotesk: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    spaceGrotesk?: React.CSSProperties;
  }
}

// tell TypeScript about the new 'brand' palette object
declare module '@mui/material/styles' {
  interface Palette {
    brand: {
      black: string;
      // Add other brand colors here (e.g., gold: string)
    };
  }
  interface PaletteOptions {
    brand?: {
      black?: string;
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    spaceGrotesk: true;
  }
}

const black = '#121212';

const theme = createTheme({
  palette: {
    brand: {
      black: black,
    },
    text: {
      primary: black,
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", "Roboto", "sans-serif"',
    spaceGrotesk: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    allVariants: {
      color: black,
    },
    button: {
      textTransform: 'none',
      fontFamily: '"Space Grotesk", sans-serif',
      // color: black,
    },
  },
});

export default theme;
