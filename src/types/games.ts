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

export interface CartItem {
  id: number;
  game: Game;
  quantity: number;
}

export interface Cart {
  id: number;
  items: CartItem[];
}
