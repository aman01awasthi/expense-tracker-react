import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({data, del}) =>{
    
    return(
        <>
        {data.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} del={del}/>
        ))}
        </>
    )
}

export default ExpenseList;