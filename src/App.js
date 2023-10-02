import ExpenseItem from "./components/expenses/ExpenseItem";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Paper Bill',
    amount: 456.87,
    date: new Date(2023, 6,20),
  },
  {
    id: 'e6',
    title: 'Electricity Bill',
    amount: 406.87,
    date: new Date(2023, 7,24),
  },
  {
    id: 'e7',
    title: 'NewsPaper',
    amount: 234.45,
    date: new Date(2022, 4, 19),
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpnenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpnenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
