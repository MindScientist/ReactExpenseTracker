import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = props => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [formVisibility, setFormVisibility] = useState(false);

  const changeTitleHandler = e => {
    setEnteredTitle(e.target.value);
  }
  const changeAmountHandler = e => {
    setEnteredAmount(e.target.value);
  }
  const changeDateHandler = e => {
    setEnteredDate(e.target.value);
  }
  const clickHandler = e => {
    setFormVisibility(!formVisibility);
  }

  const submitHandler = e => {
    setFormVisibility(!formVisibility);

    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSendForm(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <div>
      {
        formVisibility
          ?
          (<form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Name</label>
                <input type="text" value={enteredTitle} onChange={changeTitleHandler}></input>
              </div>
              <div className="new-expense__control">
                <label>Expense</label>
                <input type="number" value={enteredAmount} min="0,01" step="0,01" onChange={changeAmountHandler}></input>
              </div>
              <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="01.01.2019" max="31.12.2025" onChange={changeDateHandler}></input>
              </div>
            </div>
            <div className="new-expense__actions">
              <button onClick={clickHandler} type="button">Cancel</button>
              <button type="submit">Add expense</button>
            </div>
          </form>)
          :
          (<button onClick={clickHandler}>Add new expense</button>)
      }
    </div>
  );
}

export default ExpenseForm;