// src/app/page.tsx

import InteractiveFrontDiagram from "./components/InteractiveFrontDiagram";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Interactive Anatomy Diagram for Countertechnique Dance
      </h1>
      <InteractiveFrontDiagram />
    </main>
  );
}
