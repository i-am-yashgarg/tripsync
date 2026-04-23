import { TripData } from "./types";

const KEY = "tripsync_guest_trip";

export function saveTrip(data: TripData) {
  if (typeof window === "undefined") return;

  localStorage.setItem(KEY, JSON.stringify(data));
}

export function getTrip(): TripData | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(KEY);

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}