import react, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [{
  id: 'e1',
  title: 'Quantum mechanics book',
  amount: 94.12,
  date: new Date(2020, 7, 14),
}, {
  id: 'e2',
  title: 'New laptop',
  amount: 799.49,
  date: new Date(2021, 2, 12)
}, {
  id: 'e3',
  title: 'Сar insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
}, {
  id: 'e4',
  title: 'New table',
  amount: 450,
  date: new Date(2021, 5, 12),
}];

const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenses);

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
