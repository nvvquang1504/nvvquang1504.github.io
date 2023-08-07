import Header from "../../components/Header";
import Hero from "./Hero";
import Founders from "./Founders";
import Testimonials from "./Testimonials";
import { Box } from "@mui/material";
import Footer from "../../components/Footer";
const AboutPage = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Founders />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default AboutPage;
