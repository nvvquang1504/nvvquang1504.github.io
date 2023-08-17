import { useMemo } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem";
import { useAppSelector } from "../../store/hooks.ts";
import "./style.scss";
const Cart = ({ setShowCart }: { setShowCart: any }) => {
  const { cartItems } = useAppSelector((state) => state.global);
  const subtotal = useMemo(() => {
    let myValue = 0;
    cartItems.map(
      (item: any) =>
        (myValue += item.attributes.price * item.attributes.quantity),
    );
    return myValue;
  }, [cartItems]);
  return (
    <div className={"cart-panel"}>
      <div className="opac-layer">dada</div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {cartItems.length == 0 ? (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className={"return-cta "}>RETURN TO SHOP</button>
          </div>
        ) : (
          <>
            <CartItem cartItems={cartItems} />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="text total">{subtotal} &#x20AB;</span>
              </div>
              <div className="button">
                <button className="checkout-cta">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
