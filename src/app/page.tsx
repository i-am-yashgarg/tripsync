export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-100 to-sky-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/40 bg-white/50 p-10 shadow-xl backdrop-blur-md">
          <p className="text-sm font-semibold tracking-widest text-emerald-700">
            TRIPSYNC
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Plan Dream Trips with AI
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-700">
            Build itineraries, manage group travel, discover destinations,
            and experience immersive themes based on where you go.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-2xl bg-slate-900 px-6 py-3 text-white hover:opacity-90">
              Start Planning
            </button>

            <button className="rounded-2xl border border-slate-300 px-6 py-3">
              Explore Trips
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
