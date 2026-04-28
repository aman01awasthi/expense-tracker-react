import { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  const [editExpense, setEditExpense] = useState(null);

  const handleEditExpense =(expense) => {
    setEditExpense(expense);
  }

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [
      ...prev,
      { ...newExpense, amount: Number(newExpense.amount), id: Date.now() },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredCategory = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm key={editExpense ? editExpense.id : 'new'} onAddExpense={handleAddExpense} onEditExpense={handleEditExpense} editExpense={editExpense}/>
      <br />
      <CategoryFilter
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ExpenseList data={filteredCategory} del={handleDeleteExpense} onEditExpense={handleEditExpense} editExpense={editExpense}/>
      <ExpenseTotal data={expenses} />
    </>
  );
}

export default App;
