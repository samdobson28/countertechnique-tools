// src/app/page.tsx

import InteractiveFrontDiagram from "./components/InteractiveFrontDiagram";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-4 sm:mb-6 text-center">
            Interactive Countertechnique Body Map
          </h1>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            Explore the principles of Countertechnique through this interactive
            visualization. Click on different body parts to learn about their
            specific roles and functions in movement.
          </p>
          <InteractiveFrontDiagram />
        </div>
      </main>
    </div>
  );
}
