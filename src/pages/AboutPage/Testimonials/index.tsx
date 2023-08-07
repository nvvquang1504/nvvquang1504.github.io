import { Box, Typography } from "@mui/material";
import VerticalStack from "../../../components/VerticalStack";
import SectionTitle from "../../../components/SectionTitle";
import Testimonial from "./Testimonial";
import testimonialImage from "../../../assets/imgs/testimonial-1.png";
import { PropsWithChildren } from "react";
const MyDescription = (props: PropsWithChildren) => {
  return (
    <Typography variant={'h6'} fontStyle={"Baloo"}>
      {props.children}
    </Typography>
  );
};
const MyName = (props: PropsWithChildren) => {
  return <Typography fontSize={"1.3125rem"}>{props.children}</Typography>;
};
const Testimonials = () => {
  return (
    <Box pb={12}>
      <SectionTitle text1={"Testimonials"} text2={""} />
      <VerticalStack width={"68%"} margin={"0 auto"} spacing={24}>
        <Testimonial testimonialImage={testimonialImage}>
          <MyDescription>
            Once we ordered some accessories items and we got the products
            delivered in our doorstep, the customer support was super helpful
            and they answered all my queries.
          </MyDescription>
          <MyName>Stacy</MyName>
        </Testimonial>
        <Testimonial testimonialImage={testimonialImage}>
          <MyDescription>
            I ordered 5 shirts from them and received them in no time. The
            customer support was awesome!
          </MyDescription>
          <MyName>Tiffany</MyName>
        </Testimonial>
        <Testimonial testimonialImage={testimonialImage}>
          <MyDescription>
            I got a wrong shirt so I contacted them and they happily offered me
            a refund. I will surely shop from them again.
          </MyDescription>
          <MyName>James</MyName>
        </Testimonial>
      </VerticalStack>
    </Box>
  );
};

export default Testimonials;
