import { Box, ContainerProps } from "@mui/material";

const Container = (props: ContainerProps) => {
  return (
    <Box width={"90%"} margin={"0 auto"}>
      {props.children}
    </Box>
  );
};

export default Container;
