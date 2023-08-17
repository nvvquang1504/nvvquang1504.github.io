import { useState } from "react";
import { useAppDispatch } from "../../store/hooks.ts";
import RelatedProducts from "./RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useFetchData } from "../../hooks/useFetchData.ts";
import { useParams } from "react-router-dom";
import "./style.scss";
import { REACT_APP_DEV_URL } from "../../env.ts";
import { ADD_TO_CART } from "../../store/features/globalSlice.ts";
const SingleProduct = () => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const { data } = useFetchData(`/api/products?populate=*&[filters][id]=${id}`);

  function increment() {
    setQuantity((prev) => prev + 1);
  }
  function decrement() {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev + 1;
    });
  }

  if (!data) return;
  const product = data.data[0].attributes;
  return (
    <div className={"single-product-main-content"}>
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={product.img.data[0].attributes.url}
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">{product.price} &#x20AB;</span>
            <span className="desc">{product.desc}</span>
            <div className="cart-buttons">
              <div className="quality-buttons">
                <span
                  onClick={() => {
                    decrement();
                  }}
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  onClick={() => {
                    increment();
                  }}
                >
                  +
                </span>
              </div>
              <button
                className={"add-to-cart-button"}
                onClick={() => {
                  dispatch(ADD_TO_CART({ product: data.data[0], quantity }));
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <div className="info-item">
              <span className="text-bold">
                Category:{"  "}
                <span>{product.categories.data[0].attributes.title}</span>
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
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
