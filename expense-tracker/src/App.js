import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Cake",
      amount: 10.25,
      date: new Date(2021, 2, 28),
    },
    {
      id: "2",
      title: "Rice",
      amount: 20.25,
      date: new Date(2021, 2, 10),
    },
    {
      id: "3",
      title: "Biriyani",
      amount: 30.25,
      date: new Date(2020, 3, 10),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
