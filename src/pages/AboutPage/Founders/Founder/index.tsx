import { Box, Typography, StackProps } from "@mui/material";
import VerticalStack from "../../../../components/VerticalStack";

const FounderImage = (props: { src: string }) => {
  return <img src={props.src} alt="" />;
};
const FounderContent = (props: StackProps) => {
  return <VerticalStack {...props} />;
};
const Founder = (props: { founderImage: string; name: string }) => {
  return (
    <Box
      maxWidth={"100%"}
      height={"auto"}
      sx={{
        "& img": {
          width: "100%",
          height: "17.5rem",
        },
      }}
    >
      <FounderImage src={props.founderImage} />
      <FounderContent py={3.6}>
        <Typography variant={"h6"} fontWeight={700}>
          {props.name}
        </Typography>
      </FounderContent>
    </Box>
  );
};

export default Founder;
