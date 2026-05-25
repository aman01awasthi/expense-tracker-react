// PURPOSE: Here we will get user input for Category, Name, amount and add button
// RECEIVES: user input we will be receiving here
// RETURNS: userinputs only we will get

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ExpenseForm = ({ onAddExpense, onEditExpense, editExpense }) => {
  const { theme } = useTheme();
  const [name, setName] = useState(editExpense ? editExpense.name : "");
  const [category, setCategory] = useState(
    editExpense ? editExpense.category : "",
  );
  const [amount, setAmount] = useState(editExpense ? editExpense.amount : "");
  const [errors, setErrors] = useState({ name: "", category: "", amount: "" });
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const fakeApiCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.2
          ? resolve()
          : reject(new Error("Server error. Try again."));
      }, 1500);
    });
  };

  const addName = (e) => {
    setName(e.target.value);
  };
  const addCategory = (e) => {
    setCategory(e.target.value);
  };
  const addAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const newErrors = { name: "", category: "", amount: "" };
    if (!name.trim()) newErrors.name = "Name is required";
    if (!category.trim()) newErrors.category = "Category is required";
    if (!amount.trim()) newErrors.amount = "Amount is required";

    if (Object.values(newErrors).some((e) => e !== "")) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await fakeApiCall();

      if (editExpense) {
        onEditExpense({ id: editExpense.id, name, category, amount });
      } else {
        onAddExpense({ name, category, amount });
      }

      setName("");
      setCategory("");
      setAmount("");
      setErrors({ name: "", category: "", amount: "" });
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <div
        className={`rounded-xl shadow-md p-6 w-full ${theme === "light" ? "bg-white" : "bg-gray-700"}`}
      >
        <h2
          className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}
        >
          {editExpense ? "Edit Expense" : "Add Expense"}
        </h2>

        {submitError && (
          <p className="text-red-500 text-sm mb-3 text-center">{submitError}</p>
        )}

        <form>
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <label
                htmlFor="name"
                className={`text-sm font-medium mb-1 block ${theme === "light" ? "text-gray-800" : "text-white"}`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={addName}
                className="border rounded-lg p-2 w-full"
                placeholder="Expense name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="flex-1">
              <label
                htmlFor="category"
                className={`text-sm font-medium mb-1 block ${theme === "light" ? "text-gray-800" : "text-white"}`}
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={addCategory}
                className="border rounded-lg p-2 w-full"
                placeholder="e.g. Food"
              />
              {errors.category && (
                <p className="text-red-500 text-xs mt-1">{errors.category}</p>
              )}
            </div>
            <div className="flex-1">
              <label
                htmlFor="amount"
                className={`text-sm font-medium mb-1 block ${theme === "light" ? "text-gray-800" : "text-white"}`}
              >
                Amount (₹)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={addAmount}
                className="border rounded-lg p-2 w-full"
                placeholder="0"
              />
              {errors.amount && (
                <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
              )}
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
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
