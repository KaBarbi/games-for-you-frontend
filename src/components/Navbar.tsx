import { useState, type JSX } from "react"
import { ShoppingCart, User, Search, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export function Navbar(): JSX.Element {
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", search)
    setOpen(false)
  }

  return (
    <nav className="bg-[#1b1f3b] text-white px-6 py-3 flex items-center justify-between relative z-40">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-lg">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logog4u.svg"
            alt="GamesForYou Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>GamesForYou</span>
        </Link>
      </div>

      {/* Mobile Button */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="md:hidden text-white ml-4"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Search */}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex flex-1 max-w-md mx-8"
        role="search"
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
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-[#22d3ee] hover:bg-[#1ed2f0] text-[#0f0f2f] rounded-full flex items-center justify-center"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </form>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-[#22d3ee]">Home</Link>
        <Link to="/catalog" className="hover:text-[#22d3ee]">Catalog</Link>
        <Link to="/cart" className="hover:text-[#22d3ee]">
          <ShoppingCart size={20} />
        </Link>
        <Link to="/login" className="hover:text-[#22d3ee]">
          <User size={20} />
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute left-0 top-full w-full transform transition-transform duration-200 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
        style={{ zIndex: 1000 }}
      >
        <div className="bg-[#1b1f3b] py-4 px-6 flex flex-col shadow-lg border-t border-white/5">

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="pb-4 border-b border-white/10">
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
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-[#22d3ee] hover:bg-[#1ed2f0] text-[#0f0f2f] rounded-full flex items-center justify-center"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Links with Dividers */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/10 hover:text-[#22d3ee]"
          >
            Home
          </Link>

          <Link
            to="/catalog"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/10 hover:text-[#22d3ee]"
          >
            Catalog
          </Link>

          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="py-3 border-b border-white/10 hover:text-[#22d3ee] flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="py-3 hover:text-[#22d3ee] flex items-center gap-2"
          >
            <User size={20} />
            <span>Login</span>
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
