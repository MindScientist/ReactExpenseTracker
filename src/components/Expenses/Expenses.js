import React, {useState} from "react";

import Card from "../UI/Card";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('');

  const selectYearHandler = year => {
    setSelectedYear(year);
  }

  const filteredExpenses = props.collection.filter(item => {
    return Number.parseInt(selectedYear) === 0 || item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onSelectYear={selectYearHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;