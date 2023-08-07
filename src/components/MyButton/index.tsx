import VerticalStack from "../VerticalStack";
import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
type MyButtonProps = {
  type: "primary" | "secondary";
  isRoundCorner: boolean;
  px?: number;
  py?: number;
  mt?: number;
  onClick?: () => void;
};
const MyButton = (props: MyButtonProps & PropsWithChildren) => {
  const isPrimary = props.type === "primary";
  const isSecondary = props.type === "secondary";
  return (
    <Box
      mt={props.mt ? props.mt : 0}
      minWidth={"fit-content"}
      maxWidth={"fit-content"}
      height={"3rem"}
      color={"white"}
      onClick={props.onClick}
      bgcolor={
        isPrimary ? "primary.main" : isSecondary ? "secondary.main" : "white"
      }
      sx={{
        cursor: "pointer",
      }}
      borderRadius={props.isRoundCorner ? "8px" : ""}
    >
      <VerticalStack
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          color={!props.type ? "primary.main" : "white"}
          px={props.px ? props.px : 2}
          py={props.py ? props.py : 0}
          whiteSpace={"nowrap"}
        >
          {props.children}
        </Typography>
      </VerticalStack>
    </Box>
  );
};

export default MyButton;
