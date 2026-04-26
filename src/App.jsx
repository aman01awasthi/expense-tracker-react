import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses(prev => [...prev, {...newExpense, amount: Number(newExpense.amount), id: Date.now()}]);
  }
  console.log(expenses);

  const handleDeleteExpense = (id)=>{
    setExpenses(expenses.filter((expense)=> expense.id !== id))
  }
  
  return (
    <>
      <ExpenseForm onAddExpense={handleAddExpense}/>
      <ExpenseList data={expenses} del={handleDeleteExpense}/>
      <ExpenseTotal data={expenses}/>
    </>
  )
}

export default App
