import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import cartStyle from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={cartStyle.button} onClick={props.onClick}>
      <span className={cartStyle.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cartStyle.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
