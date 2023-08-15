import Product from "./Product";
import "./style.scss";
const Products = ({
  innerPage,
  headingText,
}: {
  innerPage?: boolean;
  headingText?: string;
}) => {
  return (
    <div className={"products-container"}>
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
