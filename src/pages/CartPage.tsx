import React from "react"
import { FaArrowLeft } from "react-icons/fa" // ícone de seta

const EmptyCart: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
            <div className="flex flex-col items-center gap-4">
                <FaArrowLeft className="text-gray-400 text-6xl mb-4" />

                <h2 className="text-xl font-semibold">
                    Seu carrinho está vazio
                </h2>
                <p className="text-gray-500 max-w-md">
                    Parece que você ainda não adicionou nenhum jogo ao seu
                    carrinho. Que tal explorar nosso catálogo?
                </p>

                <a href="/catalog" className="bg-teal-400 hover:22d3ee text-black font-semibold px-6 py-3 rounded-lg transition">
                    Explorar Catálogo
                </a>

                <a href="/" className="text-black hover:underline mt-2">
                    Voltar ao Início
                </a>
            </div>
        </div>
    )
}

export default EmptyCart
