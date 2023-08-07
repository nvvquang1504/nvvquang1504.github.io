import { Grid, Typography } from "@mui/material";
import Container from "../../../components/Container";
import VerticalStack from "../../../components/VerticalStack";
import MyButton from "../../../components/MyButton";
import { PropsWithChildren } from "react";

const ContentWrapper = (props: PropsWithChildren) => {
  return (
    <VerticalStack
      bgcolor={"black"}
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VerticalStack
        width={"100%"}
        alignItems={"center"}
        height={"45%"}
        justifyContent={"space-between"}
      >
        {props.children}
      </VerticalStack>
    </VerticalStack>
  );
};

const Promo = () => {
  return (
    <Container>
      <Grid container columnSpacing={2.5} rowSpacing={2.5}>
        <Grid item mobile={12} desktop={7} height={"27rem"}>
          <ContentWrapper>
            <Typography fontSize={"2rem"} color={"white"}>
              PEACE OF MIND
            </Typography>
            <Typography
              width={"57%"}
              textAlign={"center"}
              fontSize={"1.125rem"}
              color={"white"}
            >
              A one-stop platform for all your fashion needs, hassle-free. Buy
              with a peace of mind.
            </Typography>
            <MyButton type={'primary'} isRoundCorner={false}>BUY NOW</MyButton>
          </ContentWrapper>
        </Grid>
        <Grid item mobile={12} desktop={5} height={"27rem"}>
          <ContentWrapper>
            <Typography fontSize={"2rem"} color={"white"}>
              BUY 2 GET 1 FREE
            </Typography>
            <Typography
              width={"57%"}
              textAlign={"center"}
              fontSize={"1.125rem"}
              color={"white"}
            >
              End of season sale. Buy any 2 items of your choice and get 1 free.
            </Typography>
            <MyButton type={'primary'} isRoundCorner={false}>BUY NOW</MyButton>
          </ContentWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Promo;
