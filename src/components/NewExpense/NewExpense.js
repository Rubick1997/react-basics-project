import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.floor(Math.random() * 1000).toString(),
		};
		onAddExpense(expenseData);
		setIsEditing((prevState) => !prevState);
	};
	const editingHandler = () => {
		setIsEditing((prevState) => !prevState);
	};
	return (
		<div className='new-expense'>
			{!isEditing && (
				<button onClick={editingHandler}>Add New Expense</button>
			)}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={editingHandler}/>}
		</div>
	);
}

export default NewExpense;
