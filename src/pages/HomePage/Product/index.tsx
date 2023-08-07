import { Typography, Grid } from "@mui/material";
import productImg from "../../../assets/imgs/product-1.png";
import VerticalStack from "../../../components/VerticalStack";

type ProductProps = {
  name: string;
  price: number;
};

const Product = (props: ProductProps) => {
  const { name, price } = props;
  return (
    <Grid
      item
      mobile={12}
      tablet={4}
      desktop={3}
      sx={(theme) => ({
        cursor: "pointer",
        "& img": { zIndex: -1 },
        "& .product-wrapper": {
          margin: "0 auto",
          border: "1px solid black",
          "&:hover": {
            background: "rgba(0, 0, 0, 0.2)",
          },
        },
        [theme.breakpoints.between("mobile", "tablet")]: {
          "& .product-wrapper": {
            width: "85%",
          },
        },
      })}
    >
      <VerticalStack
        className={"product-wrapper"}
        width={"100%"}
        height={"25.75rem"}
        justifyContent={"space-between"}
        sx={{
          "& img": {
            width: "100%",
            height: "21.375rem",
          },
        }}
      >
        <img src={productImg} alt="product" />
        <VerticalStack spacing={2} alignItems={"center"}>
          <Typography variant={"h6"} fontWeight={600}>
            {name}
          </Typography>
          <Typography variant={"h6"} fontWeight={600} color={"primary.main"}>
            {`$${price.toFixed(2)}`}
          </Typography>
        </VerticalStack>
      </VerticalStack>
    </Grid>
  );
};

export default Product;
