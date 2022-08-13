import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  useState();
  let title = props.title;

  const clickHandler = () => {
    // console.log("CLICKED!!!");
    title = "UPDATED";
    console.log(title);
  };
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>CHANGE ITEM</button>
    </div>
  );
}

export default ExpenseItem;
