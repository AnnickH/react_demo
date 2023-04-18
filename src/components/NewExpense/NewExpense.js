import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onNewExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const clickHandler = () => {
    setShowExpenseForm(true);
  };

  const cancelShowFormHandler = () => {
    setShowExpenseForm(false);
  };

  const submitHandler = (data) => {
    onNewExpense(data);
  };

  if (showExpenseForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSubmit={submitHandler}
          onCancel={cancelShowFormHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <div className="new-expense__actions">
        <button onClick={clickHandler}>Ajouter une dépense</button>
      </div>
    </div>
  );
};

export default NewExpense;
