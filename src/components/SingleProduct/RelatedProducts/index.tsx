import Products from "../../Products";
import { useFetchData } from "../../../hooks/useFetchData.ts";
const RelatedProducts = ({
  productId,
  categoryId,
}: {
  productId: any;
  categoryId: any;
}) => {
  const { data } = useFetchData(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`,
  );
  return (
    <div className={"related-products"}>
      <Products headingText={"Related Products"} products={data} />
    </div>
  );
};

export default RelatedProducts;
