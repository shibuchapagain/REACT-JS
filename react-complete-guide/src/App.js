import React from "react";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "truck insurance",
      amount: 4444,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "bike insurance",
      amount: 5555,
      date: new Date(2023, 3, 28),
    },
    {
      id: "e3",
      title: "car insurance",
      amount: 6666,
      date: new Date(2024, 4, 28),
    },
    {
      id: "e4",
      title: "Bus insurance",
      amount: 6666,
      date: new Date(2024, 5, 28),
    },
  ];
  return (
    <div>
      <h2>HELLO, SHIBU WHERE YOU GO</h2>
      <p>HI, MY NAME IS SHIVA CHAPAGAIN FROM PARBAT.</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
};

// return (
//   <div>
//     <h2>Let's gets started</h2>
//     <Expenses item={expenses}/>
//   </div>
// );

export default App;
