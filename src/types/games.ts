export interface Game {
  id: number;
  title: string;
  description: string;
  price: number;
  platform: "PS" | "XB" | "NS";
  platform_display: string;
  cover: string;
  created_at: string;
  stock: number;
}

export type GameSummary = Pick<
  Game,
  "id" | "title" | "price" | "platform" | "platform_display" | "cover"
>;

export interface CartItem {
  id: number;
  quantity: number;
  game: GameSummary;
}

export interface Cart {
  id: number;
  items: CartItem[];
}
