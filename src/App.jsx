import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses(prev => [...prev, newExpense]);
  }
  console.log(expenses);

  return (
    <>
    <ExpenseForm onAddExpense={handleAddExpense}/>
    </>
  )
}

export default App
