import React from "react";
import { Link } from "react-router-dom";

const GameBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0c0f2a] to-[#11143b] text-white py-20 flex flex-col items-center text-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-teal-700 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border border-teal-700 rounded-md opacity-20 animate-pulse"></div>

      {/* Content */}
      <h1 className="text-4xl md:text-5xl font-bold">
        The Best Games <span className="text-teal-400">For You</span>
      </h1>
      <p className="mt-4 max-w-xl text-gray-300">
        Discover an amazing selection of physical games for PlayStation, Xbox,
        and Nintendo Switch. Guaranteed quality, unbeatable prices, and fast
        delivery.
      </p>

      {/* Filter buttons */}
      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        <Link
          to="/catalog?platform=playstation"
          className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-700 transition"
        >
          PlayStation
        </Link>
        <Link
          to="/catalog?platform=xbox"
          className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-700 transition"
        >
          Xbox
        </Link>
        <Link
          to="/catalog?platform=nintendo-switch"
          className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-700 transition"
        >
          Nintendo Switch
        </Link>
      </div>

      {/* Main buttons */}
      <div className="mt-8 flex gap-4">
        <Link
          to="/catalog"
          className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500 transition"
        >
          Explore Catalog
        </Link>
        <button className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-700 transition">
          View Highlights
        </button>
      </div>
    </section>
  );
};

export default GameBanner;
