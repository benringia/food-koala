import CartIcon from "../Cart/CartIcon";
import cartStyle from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <button className={cartStyle.button}>
      <span className={cartStyle.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cartStyle.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
