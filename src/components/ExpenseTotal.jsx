const ExpenseTotal = ({data}) =>{
    return(
        <>
        <h2>Total Expense: {data.reduce((total, current)=> (total + current.amount),0)}</h2>
        </>
    )
}

export default ExpenseTotal;