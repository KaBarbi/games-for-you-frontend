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
                    className="bg-[#22d3ee] hover:bg-[#1fb8d3] text-black font-semibold px-6 py-3 rounded-lg transition"
                >
                    Explore Catalog
                </a>

                <a href="/" className="text-black hover:underline mt-2">
                    Back to Home
                </a>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-400"
            >
              <FaTrashAlt size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="w-full max-w-3xl mt-6 bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-2xl text-teal-400 font-bold">
            R$ {total.toFixed(2)}
          </span>
        </div>

        <button className="w-full mt-6 bg-[#22d3ee] text-black font-semibold py-3 rounded-xl hover:opacity-90 transition-all">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
