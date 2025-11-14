import { api } from "./api";
import type { Cart, CartItem } from "../types";

export const getCart = async (): Promise<Cart> => {
  const res = await api.get("carts/");
  return res.data[0];
};

export const addItemToCart = async (
  gameId: number,
  quantity: number = 1
): Promise<CartItem> => {
  const res = await api.post("cart-items/", { game_id: gameId, quantity });
  return res.data;
};
