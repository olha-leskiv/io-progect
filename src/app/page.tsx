import HomeSection from "@/components/home/home.section";
import CtaSection from "@/components/home/cta.section";
import FeaturesSection from "@/components/home/features.section";

export default function Home() {
  return (
    <main className="bg-slate-50 p-4">
      <HomeSection />
      <FeaturesSection/>
      <CtaSection />

      
    </main>
  );
}
