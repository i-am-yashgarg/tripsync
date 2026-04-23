"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSelector from "@/components/ThemeSelector";
import {
  themes,
  ThemeKey,
} from "@/features/theme/themes";

export default function HomePage() {
  const [theme, setTheme] =
    useState<ThemeKey>("forest");

  const current = themes[theme];

  return (
    <main
      className={`min-h-screen bg-gradient-to-br ${current.background} transition-all duration-700`}
    >
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-md">
          <p className="text-sm tracking-widest text-white/80">
            TRIPSYNC
          </p>

          <h1
            className={`mt-4 text-5xl font-bold ${current.accent}`}
          >
            {current.name}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/90">
            {current.subtitle}
          </p>

          <p className="mt-3 text-white/70">
            AI-powered planning for unforgettable travel.
          </p>

          <div className="mt-8">
            <Link href="/trip/new">
              <button className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition hover:bg-white/90 hover:shadow-xl">
                Start Planning Free
              </button>
            </Link>
          </div>

          <div className="mt-6">
            <ThemeSelector
              value={theme}
              onChange={setTheme}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
