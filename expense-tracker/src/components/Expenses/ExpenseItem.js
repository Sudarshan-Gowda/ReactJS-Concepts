import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const amount = props.amount;
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle("Changed!!");
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
        <button className='button' type='submit' onClick={changeTitle}>
          Change Title
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
