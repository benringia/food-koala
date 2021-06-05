import mealItemStyle from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `PHP ${props.price.toFixed(2)}`;
  return (
    <li className={mealItemStyle.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={mealItemStyle.description}>{props.description}</div>
        <div className={mealItemStyle.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
