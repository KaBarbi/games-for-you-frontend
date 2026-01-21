import { useState, type JSX } from "react";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function Navbar(): JSX.Element {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate("/");
  };

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
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-[#22d3ee] text-[#0f0f2f] rounded-full flex items-center justify-center"
          >
            <Search size={16} />
          </button>
        </div>
      </form>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 relative">
        <Link to="/" className="hover:text-[#22d3ee]">
          Home
        </Link>
        <Link to="/catalog" className="hover:text-[#22d3ee]">
          Catalog
        </Link>
        <Link to="/cart" className="hover:text-[#22d3ee]">
          <ShoppingCart size={20} />
        </Link>

        {/* USER DROPDOWN */}
        <div className="relative flex items-center h-full">
          <button
            onClick={() => setUserMenuOpen((v) => !v)}
            className="flex items-center justify-center h-8 w-8 hover:text-[#22d3ee]"
          >
            <User size={20} />
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 top-full mt-3 w-40 bg-[#1b1f3b] rounded-lg shadow-lg">
              <Link
                to="#"
                onClick={() => setUserMenuOpen(false)}
                className="block px-4 py-2 text-sm hover:bg-white/10"
              >
                Settings
              </Link>

              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-white/10"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setUserMenuOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-white/10"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute left-0 top-full w-full transition ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="bg-[#1b1f3b] px-6 py-4 flex flex-col border-t border-white/10">
          <Link to="/" onClick={() => setOpen(false)} className="py-2">
            Home
          </Link>
          <Link to="/catalog" onClick={() => setOpen(false)} className="py-2">
            Catalog
          </Link>
          <Link to="/cart" onClick={() => setOpen(false)} className="py-2">
            Cart
          </Link>

          <Link to="/settings" onClick={() => setOpen(false)} className="py-2">
            Settings
          </Link>

          {user ? (
            <button onClick={handleLogout} className="py-2 text-left">
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)} className="py-2">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
