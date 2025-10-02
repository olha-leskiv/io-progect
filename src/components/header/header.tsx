"use client";

import { useEffect } from "react";

import paths from "@/config/paths";
import { useCart } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { totalItems } = useCart();

  useEffect(() => {
    useCart.persist.rehydrate();
  }, []);

  return (
    <div className="w-full flex justify-between items-center p-2 bg-slate-200 sticky top-0 left-0 right-0 z-50">
      <Link href={paths.home} className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" className="inline" width={32} height={32} />{" "}
        <span className="font-bold text-xl text-lime-950">Project</span>
      </Link>
      <Link href={paths.cart} className="bg-gray-200 rounded-full p-2">
        Cart Icon
        <div className="bg-orange-500 text-white rounded-full aspect-square w-4 ml-2 text-sm inline-block text-center">
          {totalItems}
        </div>
      </Link>
    </div>
  );
};

export default Header;
