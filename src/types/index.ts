export interface Game {
    id: number
    title: string
    description: string
    price: number
    platform: "PS" | "XB" | "NS"
    created_at: string
}

export interface CartItem {
    id: number
    game: Game
    quantity: number
}

export interface Cart {
    id: number
    items: CartItem[]
}
