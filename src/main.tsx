// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css/normalize.css";

import { ThemeProvider } from "@mui/material";
import { myTheme } from "./utils/themes.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  //   <ThemeProvider theme={myTheme}>
  //     <App />
  //   </ThemeProvider>
  // </React.StrictMode>,
  <ThemeProvider theme={myTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
