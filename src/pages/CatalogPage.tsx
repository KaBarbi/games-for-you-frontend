/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { api } from "../services/api";

type Game = {
  id: number;
  title: string;
  price: number;
  platform: string;
  platform_display: string;
  cover: string;
};

const CatalogPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState<
    "All" | "PlayStation" | "Xbox" | "Nintendo Switch"
  >("All");
  const [sort, setSort] = useState<"Name" | "Lowest Price" | "Highest Price">(
    "Name"
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const res = await api.get("games/");
        setGames(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setError("Failed to load games 😕");
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const filteredGames = games
    .filter(
      (game) =>
        game.title.toLowerCase().includes(search.toLowerCase()) &&
        (platformFilter === "All" || game.platform_display === platformFilter)
    )
    .sort((a, b) => {
      if (sort === "Name") return a.title.localeCompare(b.title);
      if (sort === "Lowest Price") return a.price - b.price;
      if (sort === "Highest Price") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-[#f9f9fb] min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl mb-10">
        <input
          type="text"
          placeholder="Search Games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
        />

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            <span className="font-semibold mr-2">Platform:</span>
            {["All", "PlayStation", "Xbox", "Nintendo Switch"].map(
              (platform) => (
                <button
                  key={platform}
                  onClick={() => setPlatformFilter(platform as any)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    platformFilter === platform
                      ? "bg-[#22d3ee] text-black"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {platform}
                </button>
              )
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            <span className="font-semibold mr-2">Sort by:</span>
            {["Name", "Lowest Price", "Highest Price"].map((option) => (
              <button
                key={option}
                onClick={() => setSort(option as any)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  sort === option
                    ? "bg-[#22d3ee] text-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading && (
        <p className="text-center text-gray-500 text-lg">Loading games...</p>
      )}

      {error && <p className="text-center text-red-500 text-lg">{error}</p>}

      {!loading && !error && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredGames.map((game) => {
            const coverSrc = new URL(
              `../assets/covers/${game.cover}`,
              import.meta.url
            ).href;

            return (
              <div
                key={game.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
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
                  <button className="mt-3 w-full bg-[#22d3ee] text-white py-2 rounded-lg font-medium hover:bg-[#1fb8d3] transition-colors">
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
