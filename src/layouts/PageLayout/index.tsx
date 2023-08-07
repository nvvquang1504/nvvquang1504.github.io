import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
const PageLayout = (props: PropsWithChildren) => {
  return (
    <Box>
      <Header />
      {props.children}
      <Footer />
    </Box>
  );
};

export default PageLayout;
