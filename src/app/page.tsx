import BodyDiagram from "./components/BodyDiagram";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Countertechnique Tools
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-xl mb-8">
        Click a body part to view your personal Countertechnique tools and
        notes.
      </p>
      <BodyDiagram />
    </main>
  );
}
