import { Box, TextField, TextFieldProps, Typography } from "@mui/material";
import VerticalStack from "../../../../components/VerticalStack";
import HorizontalStack from "../../../../components/HorizontalStack";
import MyButton from "../../../../components/MyButton";
import { Dispatch, SetStateAction } from "react";
const InputField = (props: TextFieldProps) => {
  return (
    <VerticalStack spacing={1} flex={1}>
      <Box>{props.label}</Box>
      <TextField
        fullWidth={true}
        multiline={props.multiline}
        rows={props.rows}
      />
    </VerticalStack>
  );
};

const TheForm = (props: { setIsSent: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <VerticalStack spacing={4}>
      <Typography fontSize={"2.25rem"}>
        We would love to hear from you.
      </Typography>
      <Typography>
        If you have any query or any type of suggestion, you can contact us
        here. We would love to hear from you.
      </Typography>
      <VerticalStack spacing={2.5}>
        <HorizontalStack
          spacing={2.5}
          sx={(theme) => ({
            [theme.breakpoints.between("mobile", "tablet")]: {
              flexDirection: "column",
              "& .MuiStack-root": {
                ml: 0,
                mb: 2,
              },
            },
          })}
        >
          <InputField label={"Name"} />
          <InputField label={"Email"} />
        </HorizontalStack>
        <HorizontalStack>
          <InputField label={"Message"} multiline={true} rows={5}></InputField>
        </HorizontalStack>
        <MyButton
          isRoundCorner={false}
          type={"primary"}
          onClick={() => {
            props.setIsSent(true);
          }}
        >
          SEND MESSAGE
        </MyButton>
      </VerticalStack>
    </VerticalStack>
  );
};

export default TheForm;
