import { Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
const ContactPage = () => {
  return (
    <Box>
      <Header />
      <ContactBanner />
      <ContactForm />
      <Footer />
    </Box>
  );
};

export default ContactPage;
