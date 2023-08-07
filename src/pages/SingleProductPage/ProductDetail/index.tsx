import MyBreadcrumbs from "../../../components/MyBreadcrumbs";
import {
  Box,
  capitalize,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import HorizontalStack from "../../../components/HorizontalStack";
import MyRating from "../../../components/MyRating";
import MyButton from "../../../components/MyButton";
import VerticalStack from "../../../components/VerticalStack";
import { useState } from "react";

interface ISize {
  name: "small" | "medium" | "large" | "extra large";
  code: "s" | "m" | "l" | "xl";
}
const sizeList: ISize[] = [
  { name: "small", code: "s" },
  { name: "medium", code: "m" },
  { name: "large", code: "l" },
  { name: "extra large", code: "xl" },
];

const ProductDetail = () => {
  const [selectSize, setSelectSize] = useState("select-size");
  function handleChange(event: SelectChangeEvent<string>) {
    setSelectSize(event.target.value);
  }
  return (
    <VerticalStack
      sx={(theme) => ({
        "& .thumbs-wrapper.axis-vertical": {
          margin: 0,
          "& .thumbs.animated": {
            p: 0,
          },
        },
        [theme.breakpoints.between("mobile", "tablet")]: {
          pt: 4,
        },
      })}
    >
      <MyBreadcrumbs links={["home", "shop", "women"]} text={"shop"} />
      <Typography variant={"h3"} py={2}>
        Product Name
      </Typography>
      <HorizontalStack alignItems={"center"} spacing={1}>
        <MyRating readOnly={true} value={4} />
        <Typography>(15)</Typography>
      </HorizontalStack>
      <HorizontalStack spacing={2} py={3.2}>
        <Typography
          color={"text.secondary"}
          variant={"h5"}
          sx={{
            textDecorationLine: "line-through",
          }}
        >
          $69.00
        </Typography>
        <Typography color={"primary.main"} variant={"h5"}>
          $59.00
        </Typography>
      </HorizontalStack>
      <Typography align={"justify"} pb={4}>
        A classic t-shirt never goes out of style. This is our most premium
        collection of shirt. This plain white shirt is made up of pure cotton
        and has a premium finish.
      </Typography>
      <FormControl
        sx={(theme) => ({
          width: "30%",
          [theme.breakpoints.between("mobile", "tablet")]: {
            width: "100%",
          },
        })}
      >
        <Select
          onChange={handleChange}
          value={selectSize}
          sx={{
            fontWeight: 600,
            color: "black",
          }}
        >
          <MenuItem className={"select__menu-item"} value="select-size">
            Select Size
          </MenuItem>
          {sizeList.map((item: any, index: number) => {
            return (
              <MenuItem
                value={item.code}
                key={index}
                className={"select__menu-item"}
              >
                <HorizontalStack
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <span>{capitalize(item.name)}</span>
                  <span>{item.code.toUpperCase()}</span>
                </HorizontalStack>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Box py={4.5}>
        <MyButton isRoundCorner={false} type={"primary"} px={4}>
          ADD TO CART
        </MyButton>
      </Box>
      <VerticalStack spacing={1}>
        <HorizontalStack spacing={1}>
          <Typography>Category:</Typography>
          <Typography color={"text.primary"}>Women, Polo, Casual</Typography>
        </HorizontalStack>
        <HorizontalStack spacing={1}>
          <Typography>Tags:</Typography>
          <Typography color={"text.primary"}>Modern, Design, cotton</Typography>
        </HorizontalStack>
      </VerticalStack>
    </VerticalStack>
  );
};

export default ProductDetail;
