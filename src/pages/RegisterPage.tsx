import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MdAccountCircle } from "react-icons/md"

const Register: React.FC = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!")
            return
        }
        // Aqui você pode adicionar a lógica de cadastro
        console.log("Name:", name, "Email:", email, "Password:", password)
        navigate("/login") // redireciona para login após cadastro
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-[#000718]">
            <div className="w-full max-w-md bg-[#1a1a3a] p-8 rounded-xl shadow-lg">
                <div className="flex flex-col items-center mb-6">
                    <MdAccountCircle size={60} className="text-cyan-400 mb-2" />
                    <h2 className="text-2xl font-bold text-white">Sign up</h2>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-[#0f0f2f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow duration-300"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-[#0f0f2f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow duration-300"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-[#0f0f2f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow duration-300"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-[#0f0f2f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow duration-300"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-2 bg-cyan-400 text-[#0f0f2f] font-semibold rounded-lg hover:bg-cyan-500 transition-colors duration-300 mt-2"
                    >
                        Submit
                    </button>
                </form>

                <p className="text-gray-400 mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-cyan-400 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
