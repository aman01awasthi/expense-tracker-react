import { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import CategoryFilter from "./components/CategoryFilter";
import Login from "./pages/Login";
import { useTheme } from "./context/ThemeContext";
import { Sun, Moon } from 'lucide-react';
import {useLogin} from "./context/AuthContext";

function App() {
  const {user} = useLogin();
  const {theme, setTheme} = useTheme();
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  const [editExpense, setEditExpense] = useState(null);

  const handleEditExpense = (expense) => {
    setEditExpense(expense);
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id
          ? { ...updatedExpense, amount: Number(updatedExpense.amount) }
          : expense,
      ),
    );
    setEditExpense(null);
  };

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
    {!user ? <Login/> :
      <div className={`min-h-screen p-6 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
        <button className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} color="white"/>}
        </button>
        
        <ExpenseForm
          key={editExpense ? editExpense.id : "new"}
          onAddExpense={handleAddExpense}
          onEditExpense={handleUpdateExpense}
          editExpense={editExpense}
        />
        <br />
        <CategoryFilter
          onCategoryChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <ExpenseList
          data={filteredCategory}
          del={handleDeleteExpense}
          onEditExpense={handleEditExpense}
          editExpense={editExpense}
        />
        <ExpenseTotal data={expenses} />
      </div>
}
    </>
  );
}

export default App;
