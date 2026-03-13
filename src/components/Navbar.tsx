import { useState, useEffect, type JSX } from "react";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useGames } from "../contexts/GamesContext";

export function Navbar(): JSX.Element {
  const { games } = useGames();

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<typeof games>([]);
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      return;
    }

    const filtered = games.filter((game) =>
      game.title.toLowerCase().includes(search.toLowerCase()),
    );

    setResults(filtered.slice(0, 5));
  }, [search, games]);

  const handleSelectGame = (id: number) => {
    setSearch("");
    setResults([]);
    setOpen(false);
    navigate(`/games/${id}`);
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    setOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-[#1b1f3b] text-white px-6 py-3 flex items-center justify-between relative z-40">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 font-bold text-lg">
        <img
          src="/images/logog4u.svg"
          alt="GamesForYou Logo"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span>GamesForYou</span>
      </Link>

      {/* MOBILE BUTTON */}
      <button onClick={() => setOpen((v) => !v)} className="md:hidden">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* SEARCH DESKTOP */}
      <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-4 py-2 focus:outline-none"
        />

        <div className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-[#22d3ee] text-[#0f0f2f] rounded-full flex items-center justify-center">
          <Search size={16} />
        </div>

        {results.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-[#1b1f3b] border border-white/10 rounded-lg mt-2 shadow-lg">
            {results.map((game) => (
              <button
                key={game.id}
                onClick={() => handleSelectGame(game.id)}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 text-sm"
              >
                {game.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* LINKS DESKTOP */}
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

        {/* USER MENU */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen((v) => !v)}
            className="hover:text-[#22d3ee]"
          >
            <User size={20} />
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 top-full mt-3 w-40 bg-[#1b1f3b] rounded-lg shadow-lg border border-white/10">
              <Link
                to="/profile"
                onClick={() => setUserMenuOpen(false)}
                className="block px-4 py-2 text-sm hover:bg-white/10"
              >
                Profile
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
        className={`md:hidden absolute left-0 top-full w-full ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="bg-[#1b1f3b] px-6 py-4 flex flex-col border-t border-white/10">
          {/* MOBILE SEARCH */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-4 py-2"
            />

            {results.length > 0 && (
              <div className="mt-2 bg-[#1b1f3b] border border-white/10 rounded-lg">
                {results.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => handleSelectGame(game.id)}
                    className="block w-full text-left px-4 py-2 hover:bg-white/10 text-sm"
                  >
                    {game.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/" onClick={() => setOpen(false)} className="py-2">
            Home
          </Link>

          <Link to="/catalog" onClick={() => setOpen(false)} className="py-2">
            Catalog
          </Link>

          <Link to="/cart" onClick={() => setOpen(false)} className="py-2">
            Cart
          </Link>

          <Link to="/profile" onClick={() => setOpen(false)} className="py-2">
            Profile
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
