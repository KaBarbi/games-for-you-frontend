import React, { useState } from "react"

const CatalogPage: React.FC = () => {
    const [search, setSearch] = useState("")
    const [platformFilter, setPlatformFilter] = useState<
        "All" | "PlayStation" | "Xbox" | "Nintendo Switch"
    >("All")
    const [sort, setSort] = useState<"Name" | "Lowest Price" | "Highest Price">(
        "Name"
    )

    const games = [
        { id: 1, name: "Game A", platform: "PlayStation", price: 50 },
        { id: 2, name: "Game B", platform: "Xbox", price: 30 },
        { id: 3, name: "Game C", platform: "Nintendo Switch", price: 70 },
    ]

    const filteredGames = games
        .filter(
            (game) =>
                game.name.toLowerCase().includes(search.toLowerCase()) &&
                (platformFilter === "All" || game.platform === platformFilter)
        )
        .sort((a, b) => {
            if (sort === "Name") return a.name.localeCompare(b.name)
            if (sort === "Lowest Price") return a.price - b.price
            if (sort === "Highest Price") return b.price - a.price
            return 0
        })

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Filtros */}
            <div className="p-6 bg-white shadow-lg rounded-xl mb-6">
                <input
                    type="text"
                    placeholder="Search games..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]"
                />

                <div className="flex flex-wrap justify-between mb-4">
                    <div className="flex gap-2 mb-2 flex-wrap">
                        <span className="font-semibold mr-2">Platform:</span>
                        {["All", "PlayStation", "Xbox", "Nintendo Switch"].map(
                            (platform) => (
                                <button
                                    key={platform}
                                    onClick={() =>
                                        setPlatformFilter(platform as any)
                                    }
                                    className={`px-4 py-2 rounded-md font-medium ${
                                        platformFilter === platform
                                            ? "bg-[#22d3ee] text-black"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {platform}
                                </button>
                            )
                        )}
                    </div>

                    <div className="flex gap-2 mb-2 flex-wrap">
                        <span className="font-semibold mr-2">Sort by:</span>
                        {["Name", "Lowest Price", "Highest Price"].map(
                            (option) => (
                                <button
                                    key={option}
                                    onClick={() => setSort(option as any)}
                                    className={`px-4 py-2 rounded-md font-medium ${
                                        sort === option
                                            ? "bg-[#22d3ee] text-black"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {option}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Lista de jogos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredGames.map((game) => (
                    <div
                        key={game.id}
                        className="p-4 bg-white shadow-md rounded-lg"
                    >
                        <h3 className="font-bold">{game.name}</h3>
                        <p>{game.platform}</p>
                        <p className="text-teal-600 font-semibold">
                            ${game.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CatalogPage
