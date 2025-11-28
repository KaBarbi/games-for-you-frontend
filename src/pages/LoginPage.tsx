import React, { useState } from "react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const mainColor = "#22d3ee"

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Senha:", password);
    //API de login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <div className="flex justify-center mb-6"></div>

        <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
        <p className="text-gray-500 text-center mb-6">
          Log in to your account to continue shopping
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#22d3ee]" />
              Remember login
            </label>
            <a href="#" className="text-[#22d3ee] hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#22d3ee] text-white p-3 rounded-lg font-semibold hover:brightness-105 transition"
          >
            Confirm
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Dont have an account?{" "}
          <Link to="/register" className="text-[#22d3ee] hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default App;
