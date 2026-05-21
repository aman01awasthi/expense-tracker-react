// PURPOSE: Here we will get user input for Category, Name, amount and add button
// RECEIVES: user input we will be receiving here
// RETURNS: userinputs only we will get

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const ExpenseForm = ({ onAddExpense, onEditExpense, editExpense }) => {
  const { theme } = useTheme();
  const [name, setName] = useState(editExpense ? editExpense.name : "");
  const [category, setCategory] = useState(editExpense ? editExpense.category : "");
  const [amount, setAmount] = useState(editExpense ? editExpense.amount : "");
  const [errors, setErrors] = useState({ name: "", category: "", amount: "" });

  // Sync fields when editExpense changes
  useEffect(() => {
    if (editExpense) {
      setName(editExpense.name);
      setCategory(editExpense.category);
      setAmount(editExpense.amount);
      setErrors({ name: "", category: "", amount: "" });
    }
  }, [editExpense]);

  const validate = () => {
    const newErrors = { name: "", category: "", amount: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Expense name is required.";
      isValid = false;
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    if (!category.trim()) {
      newErrors.category = "Category is required.";
      isValid = false;
    } else if (category.trim().length < 2) {
      newErrors.category = "Category must be at least 2 characters.";
      isValid = false;
    }

    if (!amount && amount !== 0) {
      newErrors.amount = "Amount is required.";
      isValid = false;
    } else if (isNaN(amount) || Number(amount) <= 0) {
      newErrors.amount = "Amount must be a positive number.";
      isValid = false;
    } else if (Number(amount) > 1_000_000) {
      newErrors.amount = "Amount cannot exceed ₹10,00,000.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Clear individual field error on change
  const addName = (e) => {
    setName(e.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
  };
  const addCategory = (e) => {
    setCategory(e.target.value);
    if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
  };
  const addAmount = (e) => {
    setAmount(e.target.value);
    if (errors.amount) setErrors((prev) => ({ ...prev, amount: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editExpense) {
      onEditExpense({ id: editExpense.id, name, category, amount });
    } else {
      onAddExpense({ name, category, amount });
    }

    setName("");
    setCategory("");
    setAmount("");
    setErrors({ name: "", category: "", amount: "" });
  };

  const inputBase = "border rounded-lg p-2 w-full";
  const inputError = "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500";
  const inputNormal = "border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400";

  return (
    <div className="flex justify-center mb-6">
      <div className={`rounded-xl shadow-md p-6 w-full ${theme === "light" ? "bg-white" : "bg-gray-700"}`}>
        <h2 className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
          {editExpense ? "Edit Expense" : "Add Expense"}
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex gap-3 items-start">

            {/* Name */}
            <div className="flex-1">
              <label htmlFor="name" className={`text-sm font-medium mb-1 block ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={addName}
                className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                placeholder="Expense name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Category */}
            <div className="flex-1">
              <label htmlFor="category" className={`text-sm font-medium mb-1 block ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={addCategory}
                className={`${inputBase} ${errors.category ? inputError : inputNormal}`}
                placeholder="e.g. Food"
              />
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
            </div>

            {/* Amount */}
            <div className="flex-1">
              <label htmlFor="amount" className={`text-sm font-medium mb-1 block ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                Amount (₹)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={addAmount}
                className={`${inputBase} ${errors.amount ? inputError : inputNormal}`}
                placeholder="0"
                min="1"
              />
              {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition mt-6"
            >
              {editExpense ? "Update" : "Add"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;