import Advertisment from "@/components/Advertisment";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";
export default function Home() {
  return (
    <main className="flex flex-col">
      
      <div className="relative w-full h-screen">
        <Image
          src="/image0.jpeg"
          alt=""
          fill
          className="object-cover object-[center_140%]"
        />
      </div>
      <section className="bg-black text-white py-12 px-6">
        <Advertisment />
      </section>
      <section className="bg-black text-white py-12 px-6">
        <VideoSection />
      </section>
    </main>
  );
}
