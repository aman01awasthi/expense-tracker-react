import { useState } from "react";
import { useLogin } from "../context/AuthContext";

const Login = () => {
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json",
          "x-api-key": "reqres_43e82a6778c14422a68c2f8f220735d3"
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      login(data.token);
    } catch (err) {
      setError(err.message || "Enter valid details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-1 block"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-2 w-full"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1 block"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg p-2 w-full"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
