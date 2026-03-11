import { api } from "./api";
import type { Game } from "../types/games";
import type { AxiosResponse } from "axios";

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const getGames = async (): Promise<Game[]> => {
  let allGames: Game[] = [];
  let nextUrl: string | null = "games/";

  while (nextUrl !== null) {
    const res: AxiosResponse<PaginatedResponse<Game>> = await api.get(nextUrl);

    allGames = [...allGames, ...res.data.results];
    nextUrl = res.data.next;
  }

  return allGames;
};

export const getGameById = async (id: number): Promise<Game> => {
  const res: AxiosResponse<Game> = await api.get(`games/${id}/`);
  return res.data;
};