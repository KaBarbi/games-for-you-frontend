import React from "react"
import { Link } from "react-router-dom"
import { FaShoppingCart, FaSearch } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"

const Menu: React.FC = () => {
    return (
        <header className="flex justify-between items-center px-10 py-3 bg-[#0f0f2f] h-20 shadow-md gap-5">
            {/* Left Section */}
            <div className="flex items-center gap-10">
                {/* Logo + Título */}
                <div className="logo">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/images/logoGFU.svg"
                            alt="Logo"
                            className="h-12 max-h-14"
                        />
                        <span
                            style={{ color: "#2af4b8" }}
                            className="text-lg font-bold"
                        >
                            GamesForYou
                        </span>
                    </Link>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative mr-7">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-base pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-3 py-2 rounded-lg bg-[#1a1a3a] text-white text-base w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow duration-300"
                    />
                </div>

                {/* Account */}
                <Link
                    to="/login"
                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                    <MdAccountCircle size={28} />
                </Link>

                {/* Cart */}
                <Link
                    to="/cart"
                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                    <FaShoppingCart size={28} />
                </Link>
            </div>
        </header>
    )
}

export default Menu
