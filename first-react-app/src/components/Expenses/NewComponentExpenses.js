import ExpenseItem from "./ExpenseItem";
import "./NewComponentExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";

const NewComponentExpenses = (props) => {
  const [filterSelection, setFilterSelection] = useState("2020");
  const addFilterHandler = (filterItem) => {
    setFilterSelection(filterItem);
  };
  console.log(filterSelection);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedFilter={filterSelection}
          onaddFilterHandler={addFilterHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default NewComponentExpenses;
