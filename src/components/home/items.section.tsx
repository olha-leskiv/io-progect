"use client";

import { useCart } from "@/store/cart";
import { CartItem } from "@/types/types";

const ItemsSection = () => {
  const { addItem } = useCart();

  const items: CartItem[] = [
    {
      id: "1",
      name: "Стілець",
      price: 100,
      quantity: 1,
    },

    {
      id: "2",
      name: "Столик",
      price: 200,
      quantity: 1,
    },
    {
      id: "3",
      name: "Тумба",
      price: 300,
      quantity: 1,
    },
    {
      id: "4",
      name: "Диван",
      price: 400,
      quantity: 1,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 py-64">
      {items.map((item) => (
        <div key={item.id} className="bg-slate-200 p-4 rounded-lg">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p>{item.price}грн</p>
          <button
            className="bg-teal-500 text-white p-2 rounded-lg mt-2"
            onClick={() => addItem(item)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemsSection;
