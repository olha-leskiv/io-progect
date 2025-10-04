"use client";

import paths from "@/config/paths";
import { useCart } from "@/store/cart";
import Link from "next/link";
import { toast } from "sonner";

const CartPage = () => {
  const {
    items,
    removeItem,
    clearCart,
    decreaseQuantity,
    increaseQuantity,
    totalItems,
    totalPrice,
  } = useCart();
  const hasItems = !(items.length === 0);

  return (
    <div>
      <h1>Cart</h1>
      <div className="flex flex-col gap-4 p-4">
        {hasItems ? (
          items.map((item) => (
            <div
              key={item.id}
              className="bg-slate-200 p-4 rounded-lg flex justify-between items-center"
            >
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id, 1)}
                  className="bg-slate-600 text-white p-2 rounded-lg"
                >
                  -1
                </button>
                <p className="text-center w-6">{item.quantity}</p>
                <button
                  onClick={() => increaseQuantity(item.id, 1)}
                  className="bg-slate-600 text-white p-2 rounded-lg"
                >
                  +1
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white p-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div>
            <h3>No items in cart</h3>
            <Link
              className="bg-teal-500 text-white p-2 rounded-lg mt-2 block w-fit"
              href={paths.home}
            >
              Go to home
            </Link>
          </div>
        )}
        {hasItems && <p>Total items: {totalItems}</p>}
        {hasItems && <p>Total price: {totalPrice}</p>}
        {hasItems && (
          <button onClick={() => clearCart()} className="bg-red-500 text-white p-2 rounded-lg">
            Clear cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
