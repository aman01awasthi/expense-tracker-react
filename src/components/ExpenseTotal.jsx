import { useTheme } from "../context/ThemeContext";
const ExpenseTotal = ({data}) =>{
    const {theme} = useTheme();
    return(
        <div className={`rounded-xl p-4 mt-4 text-center w-max ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-bold">Total Expense: ₹{data.reduce((total, current)=> (total + current.amount),0)}</h2>
        </div>
    )
}
export default ExpenseTotal;