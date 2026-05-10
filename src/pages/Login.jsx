import { useState } from "react";
import { useLogin } from "../context/AuthContext";

const Login = () => {
  const { login } = useLogin();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border rounded-lg p-2 w-full" placeholder="Enter your name"/>
        </div>

        <div className="mb-6">
          <label htmlFor="role" className="text-sm font-medium text-gray-700 mb-1 block">Role</label>
          <input type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} className="border rounded-lg p-2 w-full" placeholder="e.g. Admin, User"/>
        </div>

        <button onClick={() => login({name, role})} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;