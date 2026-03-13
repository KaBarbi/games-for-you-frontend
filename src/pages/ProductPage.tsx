import { useParams, useNavigate } from "react-router-dom";
import { useGames } from "../contexts/GamesContext";
import ProductDetails from "../components/ProductDetails";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { getGameById, loading, error } = useGames();

  const game = id ? getGameById(Number(id)) : undefined;

  if (loading)
    return (
      <div className="flex justify-center mt-20">
        <LoadingSpinner size={40} />
      </div>
    );

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  if (!game)
    return <p className="text-center text-red-500 mt-20">Game not found</p>;

  const coverSrc = new URL(`../assets/covers/${game.cover}`, import.meta.url)
    .href;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-600 hover:text-black flex items-center gap-2 mt-4 md:mt-0"
        >
          ← Go Back
        </button>

        <div className="bg-white flex rounded-2xl justify-center p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="w-full aspect-[5/4] overflow-hidden rounded-xl">
              <img
                src={coverSrc}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>

            <ProductDetails game={game} />
          </div>
        </div>
      </div>
    </div>
  );
}
