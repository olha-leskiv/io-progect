import HomeSection from "@/components/home/home.section";
import ItemsSection from "@/components/home/items.section";

export default function Home() {
  return (
    <main className="bg-slate-50 p-4">
      <HomeSection />
      <ItemsSection />
    </main>
  );
}
