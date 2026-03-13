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
}

const GamesContext = createContext<GamesContextType>({
  games: [],
  loading: true,
});

export const GamesProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getGames();
        setGames(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.error("Failed to load games");
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  return (
    <GamesContext.Provider value={{ games, loading }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => useContext(GamesContext);
