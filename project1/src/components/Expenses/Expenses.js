import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const saveYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onSaveYear={saveYearHandler}
          />
          <ExpenseChart expense={filteredYear === 'total' ? props.items : filteredExpenses} />
          <ExpensesList items={filteredYear === 'total' ? props.items : filteredExpenses} />
        </Card>
      </div>
    </li>
  );
};

export default Expenses;
