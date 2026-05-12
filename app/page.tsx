import HeroHeader from "@/components/HeroHeader";
import Advertisment from "@/components/Advertisment";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <section className="bg-black text-white py-12 px-6">
        <Advertisment />
      </section>
    </main>
  );
}
