import React from "react"

const NewExpenseButton = (props) => {
    const changeState = () => {
        props.changeFormDisplay();
    }
    return (
        <button onClick={changeState}>Add New Expense</button>
    )
}

export default NewExpenseButton