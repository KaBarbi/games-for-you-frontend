import GameBanner from "../components/GameBanner";
import ConstructionAlert from "../components/ConstructionAlert";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router";
import { useGames } from "../contexts/GamesContext";

const HomePage = () => {
  const { games, loading, error } = useGames();

  const FEATURED_IDS = [2, 7, 11, 9];

  const featuredGames = games.filter((game) => FEATURED_IDS.includes(game.id));

  return (
    <div className="bg-[#f9f9fb] min-h-screen">
      <ConstructionAlert />
      <GameBanner />

      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0f0f2f]">
          Featured Products
        </h2>

        {loading && (
          <div className="flex justify-center">
            <LoadingSpinner size={40} />
          </div>
        )}

        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {featuredGames.map((game) => {
              const coverSrc = new URL(
                `../assets/covers/${game.cover}`,
                import.meta.url,
              ).href;

              return (
                <Link key={game.id} to={`/games/${game.id}`} className="block">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                    <img
                      src={coverSrc}
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

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log("Add to cart", game.id);
                        }}
                        className="mt-3 w-full bg-[#22d3ee] text-white py-2 rounded-lg font-medium hover:bg-[#1fb8d3] transition-colors duration-300 cursor-pointer"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
