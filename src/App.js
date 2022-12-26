import react, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [{
  id: 'e1',
  title: 'Сральная бумага',
  amount: 94.12,
  date: new Date(2020, 7, 14),
}, {
  id: 'e2',
  title: 'Новый зомбоящик',
  amount: 799.49,
  date: new Date(2021, 2, 12)
}, {
  id: 'e3',
  title: 'Страхование железного коня',
  amount: 294.67,
  date: new Date(2021, 2, 28),
}, {
  id: 'e4',
  title: 'Новый стол',
  amount: 450,
  date: new Date(2021, 5, 12),
}];

const App = () => {

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses collection={expenses}/>
    </div>
  );
}

export default App;
