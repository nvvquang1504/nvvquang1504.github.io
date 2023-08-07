import Container from "../../../components/Container";
import { Typography, Divider } from "@mui/material";
import VerticalStack from "../../../components/VerticalStack";
import HorizontalStack from "../../../components/HorizontalStack";
import MyButton from "../../../components/MyButton";
const CartTotal = () => {
  return (
    <Container>
      <VerticalStack
        width={"40%"}
        mb={12}
        sx={(theme) => ({
          [theme.breakpoints.between("mobile", "tablet")]: {
            width: "100%",
            pt:4
          },
        })}
      >
        <Typography fontSize={"2.25rem"} mb={4}>
          Cart Totals
        </Typography>
        <VerticalStack spacing={2} mb={4}>
          <HorizontalStack justifyContent={"space-between"}>
            <Typography>Subtotal</Typography>
            <Typography>$59.00</Typography>
          </HorizontalStack>
          <Divider />
          <HorizontalStack justifyContent={"space-between"}>
            <Typography>Shipping Fee</Typography>
            <Typography>FREE!!!</Typography>
          </HorizontalStack>
          <Divider />
          <HorizontalStack justifyContent={"space-between"}>
            <Typography>Total</Typography>
            <Typography>$59.00</Typography>
          </HorizontalStack>
          <Divider />
        </VerticalStack>
        <MyButton isRoundCorner={false} type={"secondary"}>
          PROCESS TO CHECKOUT
        </MyButton>
      </VerticalStack>
    </Container>
  );
};

export default CartTotal;
