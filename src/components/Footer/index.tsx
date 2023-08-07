import Container from "../../components/Container";
import HorizontalStack from "../HorizontalStack";
import VerticalStack from "../VerticalStack";
import { PropsWithChildren } from "react";
import { Box, Typography, TextField, Divider, Link } from "@mui/material";
import { AiOutlineRight } from "react-icons/ai";
import imgPaypal from "../../assets/imgs/paypal.png";
import imgVisa from "../../assets/imgs/visa.png";
import imgMastercard from "../../assets/imgs/mastercard.png";
import imgVisaElectron from "../../assets/imgs/visa-electron.png";
const TopFooterItem = (props: PropsWithChildren & { title: string }) => {
  return (
    <VerticalStack spacing={3} className={"item"}>
      <Typography fontWeight={700}>{props.title}</Typography>
      <VerticalStack spacing={1}>{props.children}</VerticalStack>
    </VerticalStack>
  );
};

const TopFooter = () => {
  return (
    <HorizontalStack
      justifyContent={"space-between"}
      className={"top-footer"}
      py={"4.37rem"}
      sx={(theme) => ({
        "& a": {
          textTransform: "uppercase",
          cursor: "pointer",
        },
        [theme.breakpoints.between("mobile", "tablet")]: {
          flexDirection: "column",
          ml: "30%",
          "& .item": {
            mb: 3,
          },
        },
      })}
    >
      <TopFooterItem title={"COMPANY INFO"}>
        <Link underline={"hover"}>about us</Link>
        <Link underline={"hover"}>latest post</Link>
        <Link underline={"hover"}>contact us</Link>
        <Link underline={"hover"}>shop</Link>
      </TopFooterItem>
      <TopFooterItem title={"HELP LINKS"}>
        <Link underline={"hover"}>tracking</Link>
        <Link underline={"hover"}>order status</Link>
        <Link underline={"hover"}>delivery</Link>
        <Link underline={"hover"}>shipping info</Link>
        <Link underline={"hover"}>FAQ</Link>
      </TopFooterItem>
      <TopFooterItem title={"USEFULL LINKS"}>
        <Link underline={"hover"}>special offers</Link>
        <Link underline={"hover"}>gift cards</Link>
        <Link underline={"hover"}>advetising</Link>
        <Link underline={"hover"}>terms of use</Link>
      </TopFooterItem>
      <TopFooterItem title={"GET IN THE KNOW"}>
        <HorizontalStack alignItems={"center"}>
          <TextField
            variant={"standard"}
            placeholder={"Enter Email"}
            type={"email"}
            sx={{
              "& ::placeholder": {
                color: "text.primary",
              },
            }}
          ></TextField>
          <AiOutlineRight />
        </HorizontalStack>
      </TopFooterItem>
    </HorizontalStack>
  );
};

const PaymentItem = (props: { imgSource: string }) => {
  return (
    <VerticalStack
      width={"3.5rem"}
      height={"2.125rem"}
      bgcolor={"lightgray"}
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
      px={1}
      sx={{
        "& img": {
          width: "100%",
          height: "100%",
        },
      }}
    >
      <img src={props.imgSource} alt="" />
    </VerticalStack>
  );
};
const BottomFooter = () => {
  return (
    <HorizontalStack
      justifyContent={"space-between"}
      alignItems={"center"}
      py={4}
      sx={(theme) => ({
        [theme.breakpoints.between("mobile", "tablet")]: {
          flexDirection: "column",
          "& .info": {
            mb: 3,
          },
        },
      })}
    >
      <VerticalStack spacing={1} className={"info"}>
        <Typography>© 2020 NorthStar eCommerce</Typography>
        <Typography>Privacy Policy Terms & Conditions</Typography>
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/roundicons"
            title="Roundicons"
          >
            Roundicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </VerticalStack>
      <HorizontalStack spacing={2}>
        <PaymentItem imgSource={imgVisa} />
        <PaymentItem imgSource={imgMastercard} />
        <PaymentItem imgSource={imgPaypal} />
        <PaymentItem imgSource={imgVisaElectron} />
      </HorizontalStack>
    </HorizontalStack>
  );
};
const Footer = () => {
  return (
    <Box bgcolor={"#FBFBFB"}>
      <Container>
        <TopFooter />
        <Divider variant={"fullWidth"} />
        <BottomFooter />
      </Container>
    </Box>
  );
};

export default Footer;
