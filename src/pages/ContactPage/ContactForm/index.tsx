import Container from "../../../components/Container";
import { Grid, Typography } from "@mui/material";
import TheForm from "./TheForm";
import VerticalStack from "../../../components/VerticalStack";
import MessageSent from "../MessageSent";
import { useState } from "react";
const ContactForm = () => {
  const [isSent, setIsSent] = useState<boolean>(false);
  return (
    <Container>
      <Grid container py={18} columnSpacing={8.5}>
        <Grid item mobile={12} tablet={8}>
          {isSent ? (
            <MessageSent setIsSent={setIsSent} />
          ) : (
            <TheForm setIsSent={setIsSent} />
          )}
        </Grid>
        <Grid
          item
          mobile={12}
          tablet={4}
          sx={(theme) => ({
            [theme.breakpoints.between("mobile", "tablet")]: {
              pt: 4,
            },
          })}
        >
          <VerticalStack spacing={6}>
            <VerticalStack spacing={2}>
              <Typography fontSize={"1.5rem"}>Visit Us</Typography>
              <Typography>
                UET Lahore, Punjab, Pakistan Phone:
                <br />
                +923039898987
              </Typography>
            </VerticalStack>
            <VerticalStack spacing={2}>
              <Typography fontSize={"1.5rem"}>Get In Touch</Typography>
              <Typography>
                You can get in touch with us on this provided email.
                <br />
                Email: hmjawad087@gmail.com
              </Typography>
            </VerticalStack>
          </VerticalStack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
