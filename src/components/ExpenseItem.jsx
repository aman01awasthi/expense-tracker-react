const ExpenseItem = ({data, del, onEditExpense}) => {

    return(
        <>
        <div>
            <h3>{data.name}</h3>
            <p>{data.category}</p>
            <p>{data.amount}</p>
            <button type="button" onClick={()=> del(data.id)}>Delete</button>
            <button type="button" onClick={()=> onEditExpense(data)}>Edit</button>
        </div>
        </>
    )
}

export default ExpenseItem;