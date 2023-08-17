import "./style.scss";
import { MdClose } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "../../../store/hooks.ts";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRODUCT_QUANTITY,
} from "../../../store/features/globalSlice.ts";
import { REACT_APP_DEV_URL } from "../../../env.ts";

const CartItem = ({ cartItems }: { cartItems: any }) => {
  const dispatch = useAppDispatch();

  function handleRemoveFromCart(product: any) {
    dispatch(REMOVE_FROM_CART({ product }));
  }

  return (
    <div className={"cart-products"}>
      {cartItems.map((item: any) => {
        return (
          <div key={item.id} className="cart-product">
            <div className="img-container">
              <img
                src={
                  item.attributes.img.data[0].attributes.url
                }
                alt=""
              />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <MdClose
                className={"close-btn"}
                onClick={() => {
                  handleRemoveFromCart(item);
                }}
              />
              <div className="quality-buttons">
                <span
                  onClick={() =>
                    dispatch(
                      SET_PRODUCT_QUANTITY({ type: "dec", product: item }),
                    )
                  }
                >
                  -
                </span>
                <span>{item.attributes.quantity}</span>
                <span
                  onClick={() =>
                    dispatch(
                      SET_PRODUCT_QUANTITY({ type: "inc", product: item }),
                    )
                  }
                >
                  +
                </span>
              </div>
              <div className="text">
                <span>{item.attributes.quantity}</span>
                <span>x</span>
                <span className={"highlight"}>
                  {item.attributes.price} &#x20AB;
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
