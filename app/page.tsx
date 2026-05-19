import VideoSection from "@/components/VideoSection";
import HeroHeader from "@/components/HeroHeader";
import Advertisment from "@/components/Advertisment";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <div className="py-8 px-5 gap-4">
        <section>
          <Advertisment />
        </section>
        <section>
          <VideoSection />
        </section>
      </div>
    </main>
  );
}
