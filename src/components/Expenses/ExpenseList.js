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

	return (
		<Card className='expenses'>
			<ExpensesFilter
				onChangeFilter={filterChangeHandler}
				selected={filteredYear}
			/>
			{expenses
				.filter(function (item) {
					return item.date.getFullYear() == filteredYear;
				})
				.map((item) => (
					<ExpenseItem key={item.id} item={item} />
				))}
		</Card>
	);
}

export default ExpenseList;
