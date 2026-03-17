import { api } from "./api";
import type { Cart } from "../types/games";

// get cart
export const getCart = async (): Promise<Cart> => {
  const res = await api.get("/cart/");
  return res.data;
};

// add item
export const addItemToCart = async (
  productId: number,
  quantity: number = 1,
) => {
  return api.post("/cart/add_item/", {
    product: productId,
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
  return api.delete("/cart/remove_item/", {
    data: { item_id: itemId },
  });
};
