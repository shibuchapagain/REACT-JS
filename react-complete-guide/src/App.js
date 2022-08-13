import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expense = [
    { title: "Car Insurance edit", amount: 343, date: new Date(2022, 5, 4) },
    { title: "Bike Insurance", amount: 3443, date: new Date(2022, 6, 7) },
    { title: "Train Insurance", amount: 3453, date: new Date(2022, 7, 10) },
    { title: "AirBus Insurance", amount: 3463, date: new Date() },
  ];
  return (
    <div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
