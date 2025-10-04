import { CartItem } from "@/types/types";
import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CartStore = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  decreaseQuantity: (id: string, quantity: number) => void;
  increaseQuantity: (id: string, quantity: number) => void;
};

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          let newItems;
          if (existing) {
            newItems = state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            );
          } else {
            newItems = [...state.items, item];
          }
          toast.success(`${item.name} added to cart`);
          return {
            items: newItems,
            totalItems: newItems.reduce((acc, it) => acc + it.quantity, 0),
            totalPrice: newItems.reduce((acc, it) => acc + it.price * it.quantity, 0),
          };
        }),

      removeItem: (id) =>
        set((state) => {
          const newItems = state.items.filter((i) => i.id !== id);
          toast.success(`Item removed from the cart`);
          return {
            items: newItems,
            totalItems: newItems.reduce((acc, it) => acc + it.quantity, 0),
            totalPrice: newItems.reduce((acc, it) => acc + it.price * it.quantity, 0),
          };
        }),

      clearCart: () => {
        toast.success(`Cart cleared`);
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },

      decreaseQuantity: (id, quantity) =>
        set((state) => {
          let newItems = state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - quantity } : i
          );
          if (newItems.find((i) => i.id === id)?.quantity === 0) {
            newItems = state.items.filter((i) => i.id !== id);
            toast.success(`Item removed from the cart`);
          }
          return {
            items: newItems,
            totalItems: newItems.reduce((acc, it) => acc + it.quantity, 0),
            totalPrice: newItems.reduce((acc, it) => acc + it.price * it.quantity, 0),
          };
        }),

      increaseQuantity: (id, quantity) =>
        set((state) => {
          const newItems = state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + quantity } : i
          );
          return {
            items: newItems,
            totalItems: newItems.reduce((acc, it) => acc + it.quantity, 0),
            totalPrice: newItems.reduce((acc, it) => acc + it.price * it.quantity, 0),
          };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : sessionStorage
      ),
      skipHydration: true,
    }
  )
);
