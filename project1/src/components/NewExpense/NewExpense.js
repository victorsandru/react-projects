import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: "e" + props.idLength,
    };
    props.onAddExpense(expenseData);
  };

  const openEditing = () => {
    setIsEditing(true);
  };

  const closeEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === true ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={closeEditing}
        />
      ) : (
        <button onClick={openEditing}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
