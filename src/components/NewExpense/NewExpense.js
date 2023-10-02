import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDateHandler = (eneredExpensedata) => {
        const expenseData = {
            ...eneredExpensedata,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () => {
      setIsEditing(true);
    }

    const stopEditing = () => {
      setIsEditing(false);
    }

  return (
    <div className='new-expense' >
     {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditing} />}
    </div>
  )
}

export default NewExpense