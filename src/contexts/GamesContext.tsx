/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getGames } from "../services/games";
import type { Game } from "../types/games";

interface GamesContextType {
  games: Game[];
  loading: boolean;
  error: string | null;
  getGameById: (id: number) => Game | undefined;
}

const GamesContext = createContext<GamesContextType | undefined>(undefined);

export const GamesProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getGames();
        setGames(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load games");
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const getGameById = (id: number) => {
    return games.find((game) => game.id === id);
  };

  return (
    <GamesContext.Provider
      value={{
        games,
        loading,
        error,
        getGameById,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => {
  const context = useContext(GamesContext);

  if (!context) {
    throw new Error("useGames must be used inside GamesProvider");
  }

  return context;
};
