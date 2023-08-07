import Container from "../../../components/Container";
import { Box, Typography } from "@mui/material";
import HorizontalStack from "../../../components/HorizontalStack";
import VerticalStack from "../../../components/VerticalStack";
import MyButton from "../../../components/MyButton";

const ProductRow = (props: { name: string; price: string }) => {
  return (
    <tr>
      <td>
        <HorizontalStack p={2}>
          <Typography width={"60%"} ml={2}>
            {props.name}
          </Typography>
          <Typography ml={-2}>{props.price}</Typography>
        </HorizontalStack>
      </td>
    </tr>
  );
};

const YourOrder = () => {
  return (
    <Container>
      <Typography fontSize={"2.25rem"} py={4}>
        Your Order
      </Typography>
      <Box
        sx={{
          "& table": {
            width: "100%",
            borderCollapse: "collapse",
            "& td": {
              height: "2.8rem",
              border: "1px solid #EBEBEB",
            },
          },
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <HorizontalStack p={2}>
                  <Typography width={"60%"} fontWeight={600}>
                    Product
                  </Typography>
                  <Typography fontWeight={600}>Total</Typography>
                </HorizontalStack>
              </td>
            </tr>
            <ProductRow name={"Plain White Shirt"} price={"$59.00"} />
            <tr>
              <td>
                <HorizontalStack p={2}>
                  <Typography width={"60%"}>Subtotal</Typography>
                  <Typography>$59.00</Typography>
                </HorizontalStack>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "none",
                }}
              ></td>
            </tr>
            <tr>
              <td>
                <VerticalStack
                  px={3}
                  py={4}
                  alignItems={"end"}
                  justifyContent={"center"}
                  spacing={4}
                >
                  <Box
                    bgcolor={"info.light"}
                    alignSelf={"stretch"}
                    flex={1}
                    p={4}
                    border={"1px solid"}
                    borderColor={"info.light"}
                  >
                    Cash on delivery. Please contact us if you require
                    assistance or wish to make alternate arrangements.
                  </Box>
                  <MyButton type={"secondary"} isRoundCorner={false}>
                    PLACE ORDER
                  </MyButton>
                </VerticalStack>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Container>
  );
};

export default YourOrder;
