/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import LoadingSpinner from "../components/LoadingSpinner";

import type { CartItem } from "../types/games";
import { getCart, removeCartItem, updateCartItem } from "../services/cart";

type ViewState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready" };

export default function CartPage() {
  const [state, setState] = useState<ViewState>({ status: "loading" });
  const [items, setItems] = useState<CartItem[]>([]);
  const [busyItemId, setBusyItemId] = useState<number | null>(null);

  async function load() {
    try {
      setState({ status: "loading" });

      const cart = await getCart();
      setItems(cart.items ?? []);

      setState({ status: "ready" });
    } catch (err: any) {
      const msg =
        err?.response?.status === 401
          ? "You need to be logged in to view your cart."
          : "Failed to load cart. Please try again.";

      setState({ status: "error", message: msg });
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + item.game.price * item.quantity;
    }, 0);
  }, [items]);

  async function handleIncrease(item: CartItem) {
    try {
      setBusyItemId(item.id);
      await updateCartItem(item.id, item.quantity + 1);
      await load(); // 🔥 mantém consistência com backend
    } finally {
      setBusyItemId(null);
    }
  }

  async function handleDecrease(item: CartItem) {
    if (item.quantity <= 1) return;

    try {
      setBusyItemId(item.id);
      await updateCartItem(item.id, item.quantity - 1);
      await load();
    } finally {
      setBusyItemId(null);
    }
  }

  async function handleRemove(itemId: number) {
    try {
      setBusyItemId(itemId);
      await removeCartItem(itemId);
      await load();
    } finally {
      setBusyItemId(null);
    }
  }

  if (state.status === "loading") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LoadingSpinner size={40} />
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-2">Cart</h1>
        <p className="text-red-600">{state.message}</p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => void load()}
            className="bg-[#22d3ee] hover:bg-[#1fb8d3] text-black font-semibold px-5 py-2 rounded-lg transition"
          >
            Retry
          </button>
          <Link className="underline" to="/login">
            Go to login
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h1 className="text-3xl font-bold">My Cart</h1>
        <Link to="/catalog" className="text-sm underline">
          Continue shopping
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const { game } = item;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="font-semibold truncate">{game.title}</div>

                  <div className="text-xs text-gray-500">
                    {game.platform_display}
                  </div>

                  <div className="text-sm mt-1">
                    <span className="text-gray-500">Price:</span>{" "}
                    <span className="font-semibold">
                      $ {game.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => void handleDecrease(item)}
                      disabled={busyItemId === item.id || item.quantity <= 1}
                      className="px-3 py-2 hover:bg-gray-50 disabled:opacity-50"
                    >
                      -
                    </button>

                    <div className="px-4 py-2 text-sm font-semibold w-12 text-center">
                      {item.quantity}
                    </div>

                    <button
                      onClick={() => void handleIncrease(item)}
                      disabled={busyItemId === item.id}
                      className="px-3 py-2 hover:bg-gray-50 disabled:opacity-50"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => void handleRemove(item.id)}
                    disabled={busyItemId === item.id}
                    className="text-sm underline text-red-600 disabled:opacity-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* SUMMARY */}
        <aside className="bg-white rounded-xl border border-gray-200 p-6 h-fit">
          <h2 className="text-lg font-semibold">Summary</h2>

          <div className="mt-4 flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">$ {subtotal.toFixed(2)}</span>
          </div>

          <div className="mt-2 flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold">$ 0.00</span>
          </div>

          <div className="mt-4 border-t pt-4 flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-bold">$ {subtotal.toFixed(2)}</span>
          </div>

          <button
            className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition"
            onClick={() => {
              alert("Checkout not implemented yet.");
            }}
          >
            Checkout
          </button>
        </aside>
      </div>
    </div>
  );
}
