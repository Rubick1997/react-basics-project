import React, { useState } from "react";
import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import Expenses from "./Expenses";
import ExpensesChart from "./ExpensesChart";

function ExpenseList({ expenses }) {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = expenses.filter(function (item) {
		return item.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className='expenses'>
			<ExpensesFilter
				onChangeFilter={filterChangeHandler}
				selected={filteredYear}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<Expenses items={filteredExpenses} />
		</Card>
	);
}

export default ExpenseList;
