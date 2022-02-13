import "./App.css";
import Expenses from "./components/Expenses";

function App() {
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

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
