import React from "react"
import { FaArrowLeft } from "react-icons/fa" 

const EmptyCart: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
            <div className="flex flex-col items-center gap-4">
                <FaArrowLeft className="text-gray-400 text-6xl mb-4" />

                <h2 className="text-xl font-semibold">Your cart is empty</h2>
                <p className="text-gray-500 max-w-md">
                    It looks like you haven’t added any games to your cart yet.
                    How about exploring our catalog?
                </p>

                <a
                    href="/catalog"
                    className="bg-teal-400 hover:22d3ee text-black font-semibold px-6 py-3 rounded-lg transition"
                >
                    Explore Catalog
                </a>

                <a href="/" className="text-black hover:underline mt-2">
                    Back to Home
                </a>
            </div>
        </div>
    )
}

export default EmptyCart
