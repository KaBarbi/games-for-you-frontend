import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface Game {
    id: number
    title: string
    price: number
    image: string
}

export default function CatalogPage() {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetch("https://games-for-you-back.onrender.com/games/")
            .then((res) => res.json())
            .then((data) => setGames(data))
            .catch((err) => console.error("Erro ao carregar jogos:", err))
    }, [])

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Catalog</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {games.map((game) => {
                    let cover = ""

                    try {
                        // MESMO PADRÃO DO HOMEPAGE: imagens locais via import dinâmico
                        cover = new URL(`../assets/covers/${game.image}`, import.meta.url).href
                    } catch (error) {
                        // fallback caso a imagem não exista
                        cover = new URL(`../assets/placeholder.png`, import.meta.url).href
                    }

                    return (
                        <Link
                            key={game.id}
                            to={`/games/${game.id}`}
                            className="border rounded-lg p-4 hover:shadow-lg transition"
                        >
                            <img
                                src={cover}
                                className="w-full h-48 object-cover rounded-md"
                                alt={game.title}
                            />

                            <h2 className="text-xl font-semibold mt-2">{game.title}</h2>
                            <p className="text-green-500 font-semibold">
                                R$ {game.price}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
