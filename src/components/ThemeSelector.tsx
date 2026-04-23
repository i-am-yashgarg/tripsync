"use client";

import { ThemeKey } from "@/features/theme/themes";

type Props = {
  value: ThemeKey;
  onChange: (theme: ThemeKey) => void;
};

const options: ThemeKey[] = [
  "mountain",
  "beach",
  "spiritual",
  "city",
  "forest",
];

export default function ThemeSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`rounded-2xl px-4 py-2 text-sm font-medium border transition ${
            value === item
              ? "bg-white text-slate-900"
              : "bg-white/20 text-white border-white/20"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}