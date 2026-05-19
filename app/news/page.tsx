function Nyheter() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold">
          Våre <span className="text-yellow-400">nyheter</span>
        </h1>

        <p className="text-gray-300 text-xl mt-6">
          Hold deg oppdatert på lagene våre, events og aktiviteter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

          <div className="bg-[#111] border border-yellow-500/30 rounded-3xl overflow-hidden">

            <img
              src="/image0.jpeg"
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8">

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold">
                E-Sport
              </span>

              <p className="text-gray-400 mt-6">
                Av Andreas og Shope
              </p>

              <h2 className="text-3xl font-bold mt-3">
                Nye treningstider
              </h2>

              <p className="text-gray-300 mt-4">
                Vi har oppdatert treningstidene for lagene våre.
              </p>

              <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold">
                Les mer
              </button>

            </div>
          </div>

          <div className="bg-[#111] border border-yellow-500/30 rounded-3xl overflow-hidden">

            <img
              src="/image0.jpeg"
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8">

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold">
                Turnering
              </span>

              <p className="text-gray-400 mt-6">
                Av Andreas og Shope
              </p>

              <h2 className="text-3xl font-bold mt-3">
                Ny regional cup
              </h2>

              <p className="text-gray-300 mt-4">
                Tiller E-Sport skal delta i en ny regional turnering.
              </p>

              <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold">
                Les mer
              </button>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Nyheter;