import { useContext } from "react";
import CardContext from "../../../store/cart-context";
import mealItemStyle from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CardContext);
  const price = `PHP ${props.price.toFixed(2)}`;

  const addItemToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
    
  }
  return (
    <li className={mealItemStyle.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={mealItemStyle.description}>{props.description}</div>
        <div className={mealItemStyle.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
