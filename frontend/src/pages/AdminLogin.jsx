import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const AdminLogin = () => {

    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
  localStorage.setItem("isAdmin", "true");
  navigate("/admin");
} else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-center mb-6">
        Admin Login
      </h1>

      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >

        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
  type="submit"
  className="relative w-full h-14 overflow-hidden rounded-xl border border-blue-600 group transition duration-500 shadow-md"
>
  <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

  <span className="relative z-10 flex items-center justify-center h-full text-blue-600 group-hover:text-white transition duration-500 font-semibold text-lg">
    <FaSignInAlt className="mr-2" />
    Login
  </span>
</button>

      </form>
    </div>
  );
};

export default AdminLogin;