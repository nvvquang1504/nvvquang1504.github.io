import Container from "../../../components/Container";
import HorizontalStack from "../../../components/HorizontalStack";
import VerticalStack from "../../../components/VerticalStack";
import { Typography, Grid } from "@mui/material";
import { FaTruckFast } from "react-icons/fa6";
import { MdSupport } from "react-icons/md";
import { FaArrowRotateLeft, FaFingerprint } from "react-icons/fa6";
import { ReactNode } from "react";
const benefits: BenefitItemProps[] = [
  {
    title: "free shipping",
    description: "Enjoy free shipping on all order above $100",
    icon: <FaTruckFast />,
  },
  {
    title: "suport 24/7",
    description: "Our support team is there to help you for queries",
    icon: <MdSupport />,
  },
  {
    title: "30 days return",
    description: "Simply return within 30 days for an exchange",
    icon: <FaArrowRotateLeft />,
  },
  {
    title: "100% payment secure",
    description: "Our payment are secured with 256 bit encryption",
    icon: <FaFingerprint />,
  },
];
type BenefitItemProps = {
  title: string;
  description: string;
  icon: ReactNode;
};
const BenefitItem = (props: BenefitItemProps) => {
  return (
    <HorizontalStack  spacing={2.76} justifyContent={'center'} alignItems={'center'}>
      <VerticalStack
        justifyContent={"start"}
        sx={{
          "& svg": {
            color: "primary.main",
            fontSize: "1.5rem",
          },
        }}
      >
        {props.icon}
      </VerticalStack>
      <VerticalStack justifyContent={"space-between"} spacing={1}>
        <Typography fontWeight={800} whiteSpace={"nowrap"}>
          {props.title.toUpperCase()}
        </Typography>
        <Typography>{props.description}</Typography>
      </VerticalStack>
    </HorizontalStack>
  );
};

const Benefit = () => {
  return (
    <Container>
      <Grid container rowSpacing={4} py={8}>
        {benefits.map((item, index) => {
          return (
            <Grid item mobile={12} tablet={6} desktop={3}>
              <BenefitItem
                key={index}
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Benefit;
