import GameBanner from "../components/GameBanner"
import { mockGames } from "../data/mockGames"

const HomePage = () => {
    return (
        <div className="bg-[#f9f9fb] min-h-screen">
            {/* Banner no topo */}
            <GameBanner />

            {/* Seção de destaques */}
            <section className="py-12 px-6">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#0f0f2f]">
                    Destaques
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {mockGames.map((game) => (
                        <div
                            key={game.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                        >
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {game.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {game.platform}
                                </p>
                                <p className="text-[#12a176] font-bold mt-2">
                                    R$ {game.price.toFixed(2)}
                                </p>
                                <button className="mt-3 w-full bg-[#22d3ee] text-white py-2 rounded-lg font-medium hover:bg-[#1fb8d3] transition-colors duration-300 cursor-pointer">
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomePage
