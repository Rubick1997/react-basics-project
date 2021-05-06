import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card"
function ExpenseList({ expenses }) {
	return (
		<Card className="expenses">
			{expenses.map((item) => (
				<ExpenseItem key={item.id} item={item} />
			))}
		</Card>
	);
}

export default ExpenseList;
