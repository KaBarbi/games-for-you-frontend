/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await api.post("/users/register/", {
        full_name: name,
        email,
        password,
        password2: confirmPassword,
      });

      // sucess
      navigate("/login");
    } catch (error: any) {
      if (error.response && error.response.data) {
        const data = error.response.data;
        const newErrors: { [key: string]: string } = {};

        if (data.username) newErrors.username = data.username.join(" ");
        if (data.email) newErrors.email = data.email.join(" ");
        if (data.password) newErrors.password = data.password.join(" ");
        if (!newErrors.username && !newErrors.email && !newErrors.password) {
          newErrors.general = "Registration failed. Please try again.";
        }

        setErrors(newErrors);
      } else {
        setErrors({ general: "Registration failed. Check your connection." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-gray-500 text-center mb-6">
          Fill in the details to create your account
        </p>

        {errors.general && (
          <p className="text-red-500 text-center mb-4">{errors.general}</p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#22d3ee] text-white p-3 rounded-lg font-semibold hover:brightness-105 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#22d3ee] hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
