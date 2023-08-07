import { Box, Typography } from "@mui/material";
import heroImage from "../../../assets/imgs/hero-1.png";
import VerticalStack from "../../../components/VerticalStack";
// const bannerImage = faker.image.urlLoremFlickr({
//   width: 1200,
//   height: 600,
//   category: "animal",
// });
// const bannerImage2
const Content = () => {
  return (
    <VerticalStack
      position={"absolute"}
      spacing={6}
      top={"50%"}
      right={"5%"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={(theme) => ({
        transform: "translateY(-50%)",
        "& p": {
          width: "32rem",
        },
        [theme.breakpoints.between("mobile", "tablet")]: {
          left: "50%",
          transform: "translate(-50%, -50%)",
          "& p": {
            width: "14rem !important",
          },
          "& h3": {
            pb: 4,
          },
        },
      })}
    >
      <Typography
        // width={"32rem"}
        height={"6.5rem"}
        textAlign={"center"}
        fontFamily={"Lato"}
        variant={"h3"}
        fontStyle={"normal"}
        fontWeight={800}
        color={"white"}
      >
        STYLIST PICKS BEAT THE HEAT
      </Typography>
      <VerticalStack
        width={"11rem"}
        height={"1.5rem"}
        border={"5px solid white"}
        color={"white"}
        textAlign={"center"}
        px={"2.25rem"}
        py={"1.125rem"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          cursor: "pointer",
        }}
      >
        <Typography variant={"h5"}>SHOP NOW</Typography>
      </VerticalStack>
    </VerticalStack>
  );
};

const Hero = () => {
  return (
    <Box
      position={"relative"}
      height={500}
      maxWidth={"100dvw"}
      sx={{
        "& img": {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      }}
    >
      <img src={heroImage} alt="" />
      <Content />
    </Box>
  );
};

export default Hero;
