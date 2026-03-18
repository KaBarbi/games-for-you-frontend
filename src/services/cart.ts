import { api } from "./api";
import type { Cart } from "../types/games";

// get cart
export const getCart = async (): Promise<Cart> => {
  const res = await api.get("/cart/");
  return res.data;
};

// add item
export const addItemToCart = async (gameId: number, quantity: number = 1) => {
  return api.post("/cart/add_item/", {
    game: gameId,
    quantity,
  });
};

// att quant
export const updateCartItem = async (itemId: number, quantity: number) => {
  return api.patch("/cart/update_item/", {
    item_id: itemId,
    quantity,
  });
};

// remove item
export const removeCartItem = async (itemId: number) => {
  return api.post("/cart/remove_item/", {
    item_id: itemId,
  });
};
