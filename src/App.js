import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  {
    id: "e1",
    title: "toilet paper",
    amount: 90,
    date: new Date(2020, 7, 14),
  },

  {
    id: "e2",
    title: "brush",
    amount: 50,
    date: new Date(2020, 7, 15),
  },

  {
    id: "e3",
    title: "mouse",
    amount: 590,
    date: new Date(2020, 7, 20),
  },

  {
    id: "e4",
    title: "laptop",
    amount: 90,
    date: new Date(2020, 7, 14),
  },
];

function App() {
  return (
    <div>
      <h1>hello, world!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
