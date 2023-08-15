import prod1 from "../../../assets/products/earbuds-prod-1.webp";
import "./style.scss";
const Product = () => {
  return (
    <div className={"product-card"}>
      <div className="thumbnail">
        <img src={prod1} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">Product name</span>
        <span className="price">&#x24;4</span>
      </div>
    </div>
  );
};

export default Product;
