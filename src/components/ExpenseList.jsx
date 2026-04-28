import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({data, del, onEditExpense}) =>{
    
    return(
        <>
        {data.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} del={del} onEditExpense={onEditExpense}/>
        ))}
        </>
    )
}

export default ExpenseList;