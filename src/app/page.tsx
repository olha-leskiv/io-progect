import HomeSection from "@/components/home/home.section";
import ItemsSection from "@/components/home/items.section";

import { client } from "@/lib/sanity.client";

export default async function Home() {
  const items = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    price,
    oldPrice,
    "imageUrl": image.asset->url
  }`);
  return (
    <main className="bg-slate-50 p-4">
      <HomeSection />
      <ItemsSection items={items} />
    </main>
  );
}
