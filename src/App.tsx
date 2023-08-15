import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Category from "./components/Category";
import SingleProduct from "./components/SingleProduct";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/category/:id"} element={<Category />}></Route>
        <Route path={"/product/:id"} element={<SingleProduct />}></Route>
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
