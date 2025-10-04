"use client";

import { useCart } from "@/store/cart";
import { CartItem } from "@/types/types";
import Image from "next/image";

const ItemsSection = ({ items }: { items: CartItem[] }) => {
  const { addItem } = useCart();

  return (
    <div className="grid grid-cols-4 gap-4 py-64">
      {items.map((item) => (
        <div key={item._id} className=" p-4 rounded-lg bg-slate-100">
          <div className="w-full h-48 relative  flex items-center justify-center">
            {item.imageUrl && (
              <Image src={item.imageUrl} alt={item.name} width={100} height={100} />
            )}{" "}
          </div>
          <h3 className="text-lg font-bold">{item.name}</h3>
          <div className="flex items-center gap-2">
            <p>{item.price}грн</p>
            {item.oldPrice && (
              <p className="text-sm text-gray-500 line-through">{item.oldPrice}грн</p>
            )}
          </div>
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
