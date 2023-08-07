import { Box } from "@mui/material";
import Header from "../../components/Header";
import Hero from "./Hero";
import NewProducts from "./NewProducts";
import Benefit from "./Benefit";
import Promo from "./Promo";
import BestSelling from "./BestSelling";
import Footer from "../../components/Footer";

const HomePage = () => {

  return (
    <Box>
      <Header />
      <Hero />
      <NewProducts />
      <Benefit />
      <Promo />
      <BestSelling />
      <Footer />
    </Box>
  );
};

export default HomePage;
