// PURPOSE: Here we will get user input for Category, Name, amount and add button
// RECEIVES: user input we will be receiving here
// RETURNS: userinputs only we will get

import { useState } from "react";

const ExpenseForm = ({onAddExpense, onEditExpense, editExpense}) => {
  const [name, setName] = useState(editExpense ? editExpense.name : '');
  const [category, setCategory] = useState(editExpense ? editExpense.category : '');
  const [amount, setAmount] = useState(editExpense ? editExpense.amount : '');

  const addName = (e) => {setName(e.target.value)};
  const addCategory = (e) => {setCategory(e.target.value)};
  const addAmount = (e) => {setAmount(e.target.value)};

  const handleSubmit = (e) => {
    if(editExpense){
      e.preventDefault();
      onEditExpense({id: editExpense.id, name, category, amount});
      setName('');
      setCategory('');
      setAmount('');
    } else{
      e.preventDefault();
      onAddExpense({name, category, amount});
      setName('');
      setCategory('');
      setAmount('');
    }
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
