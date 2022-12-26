import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {

  const sendFormHandler = data => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
    props.onNewExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSendForm={sendFormHandler}/>
    </div>
  );
}

export default NewExpense;