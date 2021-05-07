import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ items }) {
	if (items.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses found</h2>;
	}
	return (
		<ul className='expenses-list'>
			{items.map((item) => (
				<ExpenseItem key={item.id} item={item} />
			))}
		</ul>
	);
}
export default Expenses;
