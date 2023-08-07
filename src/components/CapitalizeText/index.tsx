import { Typography, TypographyProps } from "@mui/material";

const CapitalizeText = (props: TypographyProps) => {
  return (
    <Typography textTransform={"capitalize"} {...props}>
      {props.children}
    </Typography>
  );
};

export default CapitalizeText;
