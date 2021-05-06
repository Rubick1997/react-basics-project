import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function ExpenseList({ expenses }) {
	return (
		<div className="expenses">
			{expenses.map((item) => (
				<ExpenseItem key={item.id} item={item} />
			))}
		</div>
	);
}

export default ExpenseList;
