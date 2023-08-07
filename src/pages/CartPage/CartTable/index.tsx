import Container from "../../../components/Container";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  TableCellProps,
} from "@mui/material";
import VerticalStack from "../../../components/VerticalStack";
import { GrFormClose } from "react-icons/gr";

const FirstCell = (props: TableCellProps) => {
  return (
    <TableCell
      sx={{
        paddingLeft: 0,
      }}
    >
      {props.children}
    </TableCell>
  );
};

const CartTable = () => {
  return (
    <Container>
      <Box
        pb={10}
        sx={{
          overflowX: "auto",
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  fontWeight: 600,
                  fontSize: "1.25rem",
                },
              }}
            >
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                "& svg": {
                  cursor: "pointer",
                  "&:hover": {
                    "& path": {
                      stroke: "red",
                    },
                  },
                },
              }}
            >
              <FirstCell>
                <VerticalStack justifyContent={"center"}>
                  <GrFormClose size={24} />
                </VerticalStack>
              </FirstCell>
              <TableCell>Image</TableCell>
              <TableCell>Plain White Shirt</TableCell>
              <TableCell>$59.00</TableCell>
              <TableCell>
                <VerticalStack
                  width={"3.3125rem"}
                  height={"2.625rem"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  border={"2px solid lightgrey"}
                >
                  <Typography>1</Typography>
                </VerticalStack>
              </TableCell>
              <TableCell>$59.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default CartTable;
