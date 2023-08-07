import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
declare module "@mui/system" {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
export const myTheme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
    palette: {
      primary: {
        main: "#024E82",
        light: "#86A1B3",
      },
      secondary: {
        main: "#D6763C",
        light: "#DDA888",
      },
      info: {
        main: "#FBFBFB",
        light: "#EBEBEB",
      },
      text: {
        primary: "#555555",
        secondary: "#818181",
      },
    },
    // typography:{
    //   fontSize:15,
    //   htmlFontSize:15
    // }
  }),
);

