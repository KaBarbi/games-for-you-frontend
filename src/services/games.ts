import { api } from "./api";
import type { Game } from "../types";

export const getGames = async (): Promise<Game[]> => {
  const res = await api.get("games/");
  return res.data;
};
