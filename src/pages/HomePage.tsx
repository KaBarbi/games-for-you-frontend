import React from "react"
import { Link } from "react-router-dom"

const HomePage: React.FC = () => {
    const categories = ["PlayStation", "Xbox", "Nintendo Switch"]
    const games = [
        {
            id: 1,
            title: "The Last of Us Part II",
            price: 199.9,
            image: "/images/game1.jpg",
        },
        {
            id: 2,
            title: "Halo Infinite",
            price: 249.9,
            image: "/images/game2.jpg",
        },
        {
            id: 3,
            title: "Zelda: Breath of the Wild",
            price: 299.9,
            image: "/images/game3.jpg",
        },
    ]

    return (
        <main className="bg-[#000718] min-h-screen text-white">
            {/* Banner */}
            <section className="relative w-full h-[400px] overflow-hidden">
                {/* <img
                    src="/images/banner.jpg"
                    alt="Banner principal"
                    className="w-full h-full object-cover opacity-70"
                /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
                        The best games in physical media
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl">
                        Find exclusive titles for PlayStation, Xbox, and
                        Nintendo Switch at special prices.
                    </p>
                </div>
            </section>

            {/* Categorias */}
            <section className="px-10 py-8 flex flex-col items-center text-center">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                    Categories
                </h2>
                <div className="flex gap-4 flex-wrap justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className="px-5 py-2 bg-[#1a1a3a] rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Galeria de Jogos */}
            <section className="px-10 py-8 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
                    Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center max-w-6xl">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="bg-[#1a1a3a] rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                        >
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col">
                                <h3 className="text-lg font-bold mb-2">
                                    {game.title}
                                </h3>
                                <p className="text-cyan-400 font-semibold mb-3">
                                    $ {game.price.toFixed(2)}
                                </p>
                                <Link
                                    to={`/games/${game.id}`}
                                    className="w-full"
                                >
                                    <button className="w-full py-2 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default HomePage
