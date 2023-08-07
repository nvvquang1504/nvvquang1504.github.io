import VerticalStack from "../../../components/VerticalStack";
import { Typography } from "@mui/material";
import MyButton from "../../../components/MyButton";
import { Dispatch, SetStateAction } from "react";

const MessageSent = (props: {
  setIsSent: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <VerticalStack>
      <Typography variant={"h4"} pt={10}>
        Message sent. We’ll contact you soon.
      </Typography>
      <MyButton
        type={"primary"}
        isRoundCorner={false}
        mt={20}
        onClick={() => {
          props.setIsSent(false);
        }}
      >
        GO BACK
      </MyButton>
    </VerticalStack>
  );
};

export default MessageSent;
