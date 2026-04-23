"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveTrip } from "./storage";

export default function CreateTripForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    destination: "",
    tripType: "",
    budget: "",
    travelers: 1,
    startDate: "",
    vibe: "",
  });

  function update(
    key: string,
    value: string | number
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.destination.trim()) {
      alert("Destination required");
      return;
    }

    saveTrip(form);
    router.push("/trip/dashboard");
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-4 rounded-3xl bg-white/10 p-8 backdrop-blur-md"
    >
      <input
        placeholder="Destination"
        className="w-full rounded-xl p-3 text-black"
        onChange={(e) =>
          update("destination", e.target.value)
        }
      />

      <input
        placeholder="Trip Type"
        className="w-full rounded-xl p-3 text-black"
        onChange={(e) =>
          update("tripType", e.target.value)
        }
      />

      <input
        placeholder="Budget"
        className="w-full rounded-xl p-3 text-black"
        onChange={(e) =>
          update("budget", e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Travelers"
        className="w-full rounded-xl p-3 text-black"
        onChange={(e) =>
          update(
            "travelers",
            Number(e.target.value)
          )
        }
      />

      <input
        type="date"
        className="w-full rounded-xl p-3 text-black"
        onChange={(e) =>
          update("startDate", e.target.value)
        }
      />

      <input
        placeholder="Vibe"
        className="w-full rounded-xl p-3 text-black"
        onChange={(e) =>
          update("vibe", e.target.value)
        }
      />

      <button className="w-full rounded-xl bg-black p-3 text-white">
        Create Trip
      </button>
    </form>
  );
}