import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const selectedYearData = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const items = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={selectedYearData}
      />
      <ExpensesChart expenses={items} />
      <ExpensesList items={items} />
    </Card>
  );
};
export default Expenses;
