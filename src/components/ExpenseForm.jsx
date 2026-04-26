// PURPOSE: Here we will get user input for Category, Name, amount and add button
// RECEIVES: user input we will be receiving here
// RETURNS: userinputs only we will get

import { useState } from "react";

const ExpenseForm = ({onAddExpense}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const addName = (e) => {setName(e.target.value)};
  const addCategory = (e) => {setCategory(e.target.value)};
  const addAmount = (e) => {setAmount(e.target.value)};

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({name, category, amount});
    setName('');
    setCategory('');
    setAmount('');
  }

  return (
    <>
      <div className="container">
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={addName}/>
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" value={category} onChange={addCategory}/>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" name="amount" value={amount} onChange={addAmount}/>

            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
