const ExpenseTotal = ({data}) =>{
    return(
        <div className="bg-blue-500 text-white rounded-xl p-4 mt-4 text-center w-max">
            <h2 className="text-xl font-bold">Total Expense: ₹{data.reduce((total, current)=> (total + current.amount),0)}</h2>
        </div>
    )
}
export default ExpenseTotal;