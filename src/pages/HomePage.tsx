import { useEffect, useState } from "react";
import type { Game } from "../types";
import { getGames } from "../services/games";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Games For You</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="border rounded-lg p-2 shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{game.title}</h2>
            <p className="text-gray-600">R$ {game.price}</p>
            <Link
              to={`/games/${game.id}`}
              className="text-blue-600 hover:underline"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
