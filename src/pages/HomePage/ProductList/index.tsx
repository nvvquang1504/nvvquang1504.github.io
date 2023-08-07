import { Grid } from "@mui/material";
import Product from "../Product";
type ProductListType = {
  data: { name: string; price: number }[];
};
const ProductList = (props: ProductListType) => {
  return (
    <Grid container columnSpacing={2.5} rowSpacing={6}>
      {props.data.map((item, index) => {
        return <Product key={index} name={item.name} price={item.price} />;
      })}
    </Grid>
  );
};

export default ProductList;
