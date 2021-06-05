import Input from "../../UI/Input";
import mealItemFormStyles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={mealItemFormStyles.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
