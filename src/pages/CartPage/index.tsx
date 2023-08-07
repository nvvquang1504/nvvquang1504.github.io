import { Box } from "@mui/material";
import Header from "../../components/Header";
import MyBreadcrumbs from "../../components/MyBreadcrumbs";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
const CartPage = () => {
  return (
    <Box>
      <Header />
      <Container>
        <MyBreadcrumbs links={["home"]} text={"shopping cart"} />
      </Container>
      <CartTable />
      <CartTotal />
      <Footer />
    </Box>
  );
};

export default CartPage;
