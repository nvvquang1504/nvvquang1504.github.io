import { Typography } from "@mui/material";
import VerticalStack from "../VerticalStack";
type SectionTitleProps = {
  text1: string;
  text2?: string;
};
const SectionTitle = (props: SectionTitleProps) => {
  return (
    <VerticalStack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      py={6}
    >
      <Typography fontSize={"2.25rem"} fontWeight={700} textAlign={"center"}>
        {props.text1}
      </Typography>
      <Typography
        fontSize={"1.25rem"}
        color={"text.primary"}
        textAlign={"center"}
      >
        {props.text2}
      </Typography>
    </VerticalStack>
  );
};

export default SectionTitle;
