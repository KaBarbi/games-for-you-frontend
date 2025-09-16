import { useState } from "react"
import { ShoppingCart, User, Search } from "lucide-react"
import { Link } from "react-router-dom"

export function Navbar() {
    const [search, setSearch] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Searching for:", search)
    }

    return (
        <nav className="bg-[#1b1f3b] text-white px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-lg">
                <img
                    src="/images/logog4u.svg"
                    alt="GamesForYou Logo"
                    className="w-8 h-8 rounded-full object-cover"
                />
                GamesForYou
            </div>

            {/* Desktop Search Bar */}
            <form
                onSubmit={handleSearch}
                className="hidden md:flex flex-1 max-w-md mx-8"
            >
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search games..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-4 py-2 focus:bg-white/20 focus:border-[#22d3ee] focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-[#22d3ee] hover:bg-[#1ed2f0] text-[#0f0f2f] rounded-full flex items-center justify-center"
                    >
                        <Search className="h-4 w-4" />
                    </button>
                </div>
            </form>

            {/* Links and Icons */}
            <div className="flex items-center gap-6">
                <Link to="/" className="hover:text-[#22d3ee]">
                    Home
                </Link>
                <Link to="/catalog" className="hover:text-[#22d3ee]">
                    Catalog
                </Link>
                <Link to="/cart" className="relative hover:text-[#22d3ee]">
                    <ShoppingCart size={20} />
                </Link>
                <Link to="/login" className="hover:text-[#22d3ee]">
                    <User size={20} />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
