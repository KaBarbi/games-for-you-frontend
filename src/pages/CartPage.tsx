import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import EmptyCart from "./EmptyCart";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  removeItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, removeItem }) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div>
              <span className="font-semibold">{item.name}</span>
              <p className="text-gray-500">R$ {item.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-400"
            >
              <FaTrashAlt size={20} />
            </button>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6">
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
