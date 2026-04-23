"use client";

import { useEffect, useState } from "react";
import { getTrip } from "@/features/trip/storage";
import { TripData } from "@/features/trip/types";

export default function DashboardPage() {
  const [trip, setTrip] = useState<TripData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getTrip();
    setTrip(data);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 p-10 text-white">
        Loading trip...
      </main>
    );
  }

  if (!trip) {
    return (
      <main className="min-h-screen bg-slate-950 p-10 text-white">
        No trip found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="text-5xl font-bold">{trip.destination}</h1>

      <div className="mt-6 space-y-2 text-lg text-white/80">
        <p>Type: {trip.tripType}</p>
        <p>Budget: {trip.budget}</p>
        <p>Travelers: {trip.travelers}</p>
        <p>Start Date: {trip.startDate}</p>
        <p>Vibe: {trip.vibe}</p>
      </div>
    </main>
  );
}