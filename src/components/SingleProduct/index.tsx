import RelatedProducts from "./RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./style.scss";
import prod1 from "../../assets/products/earbuds-prod-1.webp";
const SingleProduct = () => {
  return (
    <div className={"single-product-main-content"}>
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod1} alt="" />
          </div>
          <div className="right">
            <span className="name">dasd</span>
            <span className="price">400</span>
            <span className="desc">dada</span>
            <div className="cart-buttons">
              <div className="quality-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className={"add-to-cart-button"}>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>Headphones</span>
              </span>
              <span className="text-bold">
                Share:
                <span className={"social-icons"}>
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
