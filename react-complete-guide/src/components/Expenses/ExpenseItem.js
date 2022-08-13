import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <div class="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div class="expense-item__description">
        <h2> {props.title} </h2>
        <div class="expense-item__price ">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
