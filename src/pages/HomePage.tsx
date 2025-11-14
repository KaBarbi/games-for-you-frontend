import { useEffect, useState } from "react";
import GameBanner from "../components/GameBanner";
import { api } from "../services/api";

type Game = {
  platform_display: string;
  id: number;
  title: string;
  price: number;
  platform: string;
  cover: string;
};

const HomePage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const res = await api.get("games/"); // usa baseURL
        setGames(res.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to load games 😕");
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  return (
    <div className="bg-[#f9f9fb] min-h-screen">
      <GameBanner />

      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0f0f2f]">
          Featured Products
        </h2>

        {loading && (
          <p className="text-center text-gray-500">Loading games...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={game.cover}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {game.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {game.platform_display}
                  </p>
                  <p className="text-[#12a176] font-bold mt-2">
                    $ {Number(game.price).toFixed(2)}
                  </p>
                  <button className="mt-3 w-full bg-[#22d3ee] text-white py-2 rounded-lg font-medium hover:bg-[#1fb8d3] transition-colors duration-300 cursor-pointer">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
