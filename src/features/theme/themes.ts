export type ThemeKey =
  | "mountain"
  | "beach"
  | "spiritual"
  | "city"
  | "forest";

export const themes = {
  mountain: {
    name: "Mountain Escape",
    background: "from-slate-900 via-blue-800 to-sky-400",
    accent: "text-cyan-200",
    subtitle: "Breathe the cold air of the peaks.",
  },

  beach: {
    name: "Beach Paradise",
    background: "from-cyan-400 via-sky-300 to-yellow-100",
    accent: "text-blue-900",
    subtitle: "Sun, waves and peace.",
  },

  spiritual: {
    name: "Sacred Journey",
    background: "from-orange-300 via-amber-100 to-white",
    accent: "text-orange-900",
    subtitle: "Calm paths and divine energy.",
  },

  city: {
    name: "Urban Luxury",
    background: "from-zinc-950 via-slate-800 to-indigo-700",
    accent: "text-white",
    subtitle: "Lights, luxury and movement.",
  },

  forest: {
    name: "Nature Retreat",
    background: "from-green-900 via-emerald-700 to-lime-300",
    accent: "text-lime-100",
    subtitle: "Reconnect with nature.",
  },
};