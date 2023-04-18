import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_ITEMS = [
  { id: 1, title: "Banane", amount: 5.99, date: new Date(2023, 4, 17) },
  { id: 2, title: "Orange", amount: 3.99, date: new Date(2023, 3, 16) },
];

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);

  const newExpenseHandler = (data) => {
    console.log("App.js");
    setItems((previousState) => {
      return [data, ...previousState];
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses items={items} />
    </div>
  );
}

export default App;
