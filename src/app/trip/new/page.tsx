import CreateTripForm from "@/features/trip/CreateTripForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-700 p-10">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-4xl font-bold text-white">
          Start Planning Free
        </h1>

        <CreateTripForm />
      </div>
    </main>
  );
}