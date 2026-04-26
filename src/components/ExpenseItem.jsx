const ExpenseItem = ({data, del}) => {

    return(
        <>
        <div>
            <h3>{data.name}</h3>
            <p>{data.category}</p>
            <p>{data.amount}</p>
            <button type="button" onClick={()=> del(data.id)}>Delete</button>
        </div>
        </>
    )
}

export default ExpenseItem;