const ExpenseItem = ({data, del, onEditExpense}) => {
    return(
        <div className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4 mb-3">
            <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{data.name}</h3>
                <p className="text-sm text-gray-500">{data.category}</p>
            </div>
            <p className="font-bold text-gray-800 mr-6">₹{data.amount}</p>
            <div className="flex gap-2">
                <button type="button" onClick={()=> onEditExpense(data)} className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 text-sm">Edit</button>
                <button type="button" onClick={()=> del(data.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm">Delete</button>
            </div>
        </div>
    )
}
export default ExpenseItem;