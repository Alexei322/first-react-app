import "./NewComponentExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const NewComponentExpenses = (props) => {
  const [filterSelection, setFilterSelection] = useState("2020");
  const addFilterHandler = (filterItem) => {
    setFilterSelection(filterItem);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterSelection;
  });
 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedFilter={filterSelection}
          onaddFilterHandler={addFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default NewComponentExpenses;
