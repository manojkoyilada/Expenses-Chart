import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredInfoText, setFilteredInfoText] = useState("2019, 2021, 2022 & 2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === "2019") {
      setFilteredInfoText("2020, 2021, 2022 & 2023");
    } else if (selectedYear === "2021") {
      setFilteredInfoText("2019, 2020, 2022 & 2023");
    } else if (selectedYear === "2022") {
      setFilteredInfoText("2019, 2020, 2021 & 2023");
    } else if(selectedYear === '2023') {
      setFilteredInfoText("2019, 2020, 2021 & 2022");
    }else{
      setFilteredInfoText('2019, 2021, 2022 & 2023');
    }
  };

  const filteredElements = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredElements}/> <br></br>
        <ExpensesList items={filteredElements} />
        
        {/* {filteredElements.map((expense) => (
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        {/* <ExpenseItem expense={props.items[0]} />
        <ExpenseItem expense={props.items[1]} />
        <ExpenseItem expense={props.items[2]} />
        <ExpenseItem expense={props.items[3]} /> */}
      </Card>
    </div>
  );
};

export default Expenses;
