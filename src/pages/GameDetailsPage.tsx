import React from "react"
import { useParams } from "react-router-dom"

interface Game {
    id: number
    title: string
    description: string
    price: number
    image: string
}

const games: Game[] = [
    {
        id: 1,
        title: "The Last of Us Part II",
        description:
            "Experience a post-pandemic world where survival is not guaranteed. Join Ellie in her journey of revenge and redemption.",
        price: 199.9,
        image: "/images/game1.jpg",
    },
    {
        id: 2,
        title: "Halo Infinite",
        description:
            "Step into the role of Master Chief and battle the Banished in an epic sci-fi adventure across the galaxy.",
        price: 249.9,
        image: "/images/game2.jpg",
    },
    {
        id: 3,
        title: "Zelda: Breath of the Wild",
        description:
            "Explore the vast kingdom of Hyrule and uncover secrets in this open-world action-adventure masterpiece.",
        price: 299.9,
        image: "/images/game3.jpg",
    },
]

const GameDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const game = games.find((g) => g.id === Number(id))

    if (!game) {
        return (
            <main className="bg-[#0f172a] min-h-screen flex items-center justify-center text-white">
                <p>Game not found.</p>
            </main>
        )
    }

    return (
        <main className="bg-[#0f172a] min-h-screen flex items-center justify-center text-white p-6">
            <div className="bg-[#1a1a3a] rounded-xl shadow-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
                {/* Game Cover */}
                <img
                    src={game.image}
                    alt={game.title}
                    className="w-full md:w-1/2 h-80 md:h-auto object-cover"
                />

                {/* Game Info */}
                <div className="p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
                            {game.title}
                        </h1>
                        <p className="text-gray-200 mb-6">{game.description}</p>
                        <p className="text-cyan-400 font-semibold text-2xl mb-6">
                            ${game.price.toFixed(2)}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="w-full sm:w-auto py-3 px-6 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition">
                            Add to Cart
                        </button>
                        <button className="w-full sm:w-auto py-3 px-6 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GameDetailsPage
