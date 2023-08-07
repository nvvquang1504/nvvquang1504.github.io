import "./App.css";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SingleProductPage from "./pages/SingleProductPage";
import TestAdd from "./pages/TestAdd";

function App() {
  return (
    <Box
      className={"App"}
      sx={{
        width: "100vw",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/about"} element={<AboutPage />}></Route>
        <Route path={"/contact"} element={<ContactPage />}></Route>
        <Route path={"/cart"} element={<CartPage />}></Route>
        <Route path={"/checkout"} element={<CheckoutPage />}></Route>
        <Route path={"/single-product"} element={<SingleProductPage />}></Route>
        <Route path={"/add"} element={<TestAdd />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
