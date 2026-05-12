import { useLogin } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
    const {logout} = useLogin();
    const {theme} = useTheme();
    return(
        <>
        <div className={`text-end mb-5 p-3 rounded-xl ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
            <button onClick={logout} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Logout</button>
        </div>
        </>
    )
}

export default Navbar;