import { useTheme } from "../context/ThemeContext";
const ExpenseItem = ({data, del, onEditExpense}) => {
    const {theme} = useTheme();
    return(
        <div className={`flex items-center justify-between rounded-xl shadow-sm p-4 mb-3 ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
            <div className="flex-1">
                <h3 className={`font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{data.name}</h3>
                <p className={`text-sm text-gray-500 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{data.category}</p>
            </div>
            <p className={`font-bold mr-6 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>₹{data.amount}</p>
            <div className="flex gap-2">
                <button type="button" onClick={()=> onEditExpense(data)} className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 text-sm">Edit</button>
                <button type="button" onClick={()=> del(data.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm">Delete</button>
            </div>
        </div>
    )
}
export default ExpenseItem;