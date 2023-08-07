import { Box, Typography } from "@mui/material";
import heroImage from "../../../assets/imgs/hero-1.png";
const ContactBanner = () => {
  return (
    <Box
      position={"relative"}
      height={"21.75rem"}
      maxWidth={"100dvw"}
      sx={(theme) => ({
        "& img": {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        [theme.breakpoints.between("mobile", "tablet")]: {
          "& h3": {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "20rem",
            verticalAlign: "middle",
            height: "fit-content",
            textAlign:'center'
          },
        },
      })}
    >
      <img src={heroImage} alt="" />
      <Typography
        variant={"h3"}
        color={"white"}
        textTransform={"uppercase"}
        position={"absolute"}
        top={"14.37rem"}
        bottom={"4.37rem"}
        left={"3.94rem"}
        right={"52.69rem"}
        width={"35%"}
      >
        Contact Us
      </Typography>
    </Box>
  );
};

export default ContactBanner;
