import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Image
        src="/image0.jpeg"
        alt="Shope"
        fill
        className="object-cover object-[center_140%]"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
        </h1>
        
      </div>
      
    </main>
  );
}
