import "./style.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-3.webp";
const CartItem = () => {
  return (
    <div className={"cart-products"}>
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">Product name</span>
          <MdClose className={"close-btn"} />
          <div className="quality-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className={"highlight"}>456 VND</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
