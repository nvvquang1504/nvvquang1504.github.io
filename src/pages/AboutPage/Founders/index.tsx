import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import { Grid, Box } from "@mui/material";
import Founder from "./Founder";
import founderImage from "../../../assets/imgs/the-founder-1.png";
const Founders = () => {
  return (
    <Box bgcolor={"info.main"} pb={6}>
      <Container>
        <SectionTitle text1={"The Founders"} />
        <Grid container columnSpacing={2.5}>
          {["Founder1", "Founder2", "Founder3", "Founder4"].map((item) => {
            return (
              <Grid key={item} item mobile={6} tablet={4} desktop={3}>
                <Founder founderImage={founderImage} name={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Founders;
