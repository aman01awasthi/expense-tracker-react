// PURPOSE: Here we will get user input for Category, Name, amount and add button
// RECEIVES: user input we will be receiving here
// RETURNS: userinputs only we will get

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ExpenseForm = ({ onAddExpense, onEditExpense, editExpense }) => {
  const {theme} = useTheme(); 
  const [name, setName] = useState(editExpense ? editExpense.name : "");
  const [category, setCategory] = useState(
    editExpense ? editExpense.category : "",
  );
  const [amount, setAmount] = useState(editExpense ? editExpense.amount : "");

  const addName = (e) => {
    setName(e.target.value);
  };
  const addCategory = (e) => {
    setCategory(e.target.value);
  };
  const addAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    if (editExpense) {
      e.preventDefault();
      onEditExpense({ id: editExpense.id, name, category, amount });
      setName("");
      setCategory("");
      setAmount("");
    } else {
      e.preventDefault();
      onAddExpense({ name, category, amount });
      setName("");
      setCategory("");
      setAmount("");
    }
  };

return (
  <div className="flex justify-center mb-6">
    <div className={`rounded-xl shadow-md p-6 w-full ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
      <h2 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        {editExpense ? "Edit Expense" : "Add Expense"}
      </h2>
      <form>
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <label htmlFor="name" className={`text-sm font-medium mb-1 block ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Name</label>
            <input type="text" id="name" name="name" value={name} onChange={addName} className="border rounded-lg p-2 w-full" placeholder="Expense name"/>
          </div>
          <div className="flex-1">
            <label htmlFor="category" className={`text-sm font-medium mb-1 block ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Category</label>
            <input type="text" id="category" name="category" value={category} onChange={addCategory} className="border rounded-lg p-2 w-full" placeholder="e.g. Food"/>
          </div>
          <div className="flex-1">
            <label htmlFor="amount" className={`text-sm font-medium mb-1 block ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Amount (₹)</label>
            <input type="number" id="amount" name="amount" value={amount} onChange={addAmount} className="border rounded-lg p-2 w-full" placeholder="0"/>
          </div>
          <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            {editExpense ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  </div>
);
};

export default ExpenseForm;
