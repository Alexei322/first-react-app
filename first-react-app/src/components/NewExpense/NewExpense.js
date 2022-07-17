import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import NewExpenseButton from "./NewExpenseButton";

const NewExpense = (props) => {
  const [formButtonState, setFormButtonState] = useState("button");
  const changeFormButtonState = () => {
    setFormButtonState((prevState) => {
      return prevState === "button" ? "form" : "button";
    });
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const newButton = (
    <NewExpenseButton changeFormDisplay={changeFormButtonState} />
  );
  const newExpenseForm = (
    <ExpenseForm
      changeFormDisplay={changeFormButtonState}
      onSaveExpenseData={saveExpenseDataHandler}
    />
  );
  const getCurrentStateItem = () => {
    if (formButtonState === "button") {
      return newButton;
    } else {
      return newExpenseForm;
    }
  };
  return <div className="new-expense">{getCurrentStateItem()}</div>;
};

export default NewExpense;
