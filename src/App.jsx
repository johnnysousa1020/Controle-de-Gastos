import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Filter from './components/Filter'
import './index.css'


function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = 
    localStorage.getItem('expenses')
    return savedExpenses ?
    JSON.parse(savedExpenses) : [];
  })
  
  
  const [filter, setFilter] = useState("Todos")

  const addExpense = (expense) => {
    const newExpenses = [...expenses, expense]
    setExpenses(newExpenses);
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  }

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) =>
    expense.id !== id);
    setExpenses(updatedExpenses)
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  }

  const filterdExpenses = filter === "Todos"
  ? expenses
  : expenses.filter((expense) => expense.category === filter);

  
  const total = filterdExpenses.reduce((acc, expense) => {
    const amount = Number(expense.amount);
    return acc + (isNaN(amount) ? 0 : amount);
  }, 0)



  return(
    <div className='container'>
      <h1>Controle de Gastos</h1>
      <ExpenseForm onAddExpense={addExpense}/>
      <Filter setFilter={setFilter}/>
      <ExpenseList expenses={filterdExpenses} onDelete={deleteExpense}/>
      <h2>Total: R$ {total ? total.toFixed(2) : '0.00'}</h2>
    </div>
  )
}

export default App;
 
