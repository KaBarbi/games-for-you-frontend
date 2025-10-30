import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import EmptyCart from "./EmptyCart";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Elden Ring",
      price: 249.9,
      image: "/images/eldenring.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Cyberpunk 2077",
      price: 199.9,
      image: "/images/cyberpunk.jpg",
      quantity: 2,
    },
  ]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black flex flex-col items-center pt-10 px-4">
      <h1 className="text-3xl font-bold text-black mb-6">Shopping Cart</h1>

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
                  >
                    +
                  </button>
                </div>
              </div>
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

export default CartPage;
