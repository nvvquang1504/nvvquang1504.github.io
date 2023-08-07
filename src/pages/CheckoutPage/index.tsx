// import Container from "../../components/Container";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import MyBreadcrumbs from "../../components/MyBreadcrumbs";
import BillingDetail from "./BillingDetail";
import YourOrder from "./YourOrder";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
const CheckoutPage = () => {
  return (
    <Box>
      <Header />
      <Container>
        <MyBreadcrumbs links={["home"]} text={"checkout"} />
      </Container>
      <BillingDetail />
      <YourOrder />
      <Footer />
    </Box>
  );
};

export default CheckoutPage;
