import { TextField, TextFieldProps, Typography } from "@mui/material";
import VerticalStack from "../VerticalStack";
import HorizontalStack from "../HorizontalStack";

const InputField = (
  props: { label: string; isRequired: boolean } & TextFieldProps,
) => {
  return (
    <VerticalStack spacing={1} flex={1}>
      <HorizontalStack>
        <Typography>{props.label}</Typography>
        {props.isRequired && (
          <Typography color={"secondary.main"}>*</Typography>
        )}
      </HorizontalStack>
      <TextField
        sx={{
          "& input": {
            height: "1rem",
          },
        }}
        type={props.type}
        fullWidth={true}
        multiline={props.multiline}
        rows={props.rows}
      />
    </VerticalStack>
  );
};

export default InputField;
