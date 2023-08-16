import Product from "./Product";
import "./style.scss";
const Products = ({
  innerPage,
  headingText,
  products,
}: {
  innerPage?: boolean;
  headingText?: string;
  products?: any;
}) => {
  return (
    <div className={"products-container"}>
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((item: any) => {
          return <Product key={item.id} id={item.id} data={item.attributes} />;
        })}
      </div>
    </div>
  );
};

export default Products;
