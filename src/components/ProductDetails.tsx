import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import type { Game } from "../types/games";

interface Props {
  game: Game;
}

export default function ProductDetails({ game }: Props) {
  const [quantity, setQuantity] = useState(1);

  const price = Number(game.price);
  const total = price * quantity;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">{game.title}</h1>

        <span className="mt-2 inline-block border border-green-500 text-emerald-500 text-xs px-3 py-1 rounded-full">
          {game.platform_display}
        </span>

        <p className="mt-4 text-gray-700">{game.description}</p>
      </div>

      <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">
              $ {price.toFixed(2)}
            </h2>

            <p className="text-sm text-gray-500">
              Total: $ {total.toFixed(2)}
            </p>
          </div>

          <span className="bg-green-100 text-emerald-500 text-xs px-3 py-1 rounded-full">
            {game.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <button className="mt-3 w-full bg-[#22d3ee] text-white py-2 rounded-lg font-medium hover:bg-[#1fb8d3] transition-colors duration-300 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}