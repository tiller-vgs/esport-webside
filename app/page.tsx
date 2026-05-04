import Advertisment from "@/components/Advertisment";
import Image from "next/image";

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
    </main>
  );
}
