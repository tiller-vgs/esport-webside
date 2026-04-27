import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
    <div className="relative w-full h-screen">
      <Image
        src="/image0.jpeg"
        alt="Shof E sport"
        fill
        className="object-cover object-[center_140%]"
      />
      </div>
      <section className="bg-black text-white py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-sm uppercase">
              Siste Nyheter
            </h2>
          </div>

          <div>
            <h2 className="text-sm uppercase">
              Kommende Turneringer
            </h2>
          </div>

          <div>
            <h2 className="text-sm uppercase">
              Våre Lag
            </h2>
          </div>

        </div>
      </section>

    </main>
  );
}