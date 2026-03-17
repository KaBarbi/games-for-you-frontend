import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 text-center px-4">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <ShoppingCart className="text-gray-300" size={72} />

        <h2 className="text-xl font-semibold">Your cart is empty</h2>

        <p className="text-gray-500">
          It looks like you haven’t added any games to your cart yet. How about
          exploring our catalog?
        </p>

        <Link
          to="/catalog"
          className="bg-[#22d3ee] hover:bg-[#1fb8d3] text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Explore Catalog
        </Link>

        <Link to="/" className="text-black hover:underline mt-2">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
