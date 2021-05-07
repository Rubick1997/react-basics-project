import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList({ expenses }) {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = expenses.filter(function (item) {
		return item.date.getFullYear().toString() === filteredYear;
	});

	let expensesContent = <p>No expenses found</p>;
	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((item) => (
			<ExpenseItem key={item.id} item={item} />
		));
	}
	return (
		<Card className='expenses'>
			<ExpensesFilter
				onChangeFilter={filterChangeHandler}
				selected={filteredYear}
			/>
			{expensesContent}
		</Card>
	);
}

export default ExpenseList;
