import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8 pt-20 sm:pt-32">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6">
          About Countertechnique Tools
        </h1>

        <div className="prose prose-indigo max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            This interactive guide is designed to help dancers explore and
            understand the key movement tools of Countertechnique. Each body
            part represents a specific tool that can be used to enhance your
            movement practice.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">
            About the Project
          </h2>
          <p className="text-gray-700 mb-6">
            This project was created to help dancers learn and practice
            Countertechnique principles through an interactive visualization.
            The tool allows you to explore different body parts and understand
            how they contribute to the technique's unique movement quality.
          </p>

          <p className="text-gray-700 mb-6">
            The project is open source and available on GitHub. Feel free to
            contribute, suggest improvements, or use it as a learning resource.
          </p>

          <div className="mb-8">
            <a
              href="https://github.com/samueldobson/countertechnique-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>

          <h2 className="text-2xl font-semibold text-indigo-800 mt-8 mb-4">
            Movement Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Release the Head
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Move head independently from body</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Dance with Your Eyes
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Initiate movement with eyes</li>
                <li>Connect with surrounding space</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Open the Shoulder Girdle
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Create space between shoulders</li>
                <li>Send arms outward</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Lighten the Armpits
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Maintain airiness under arms</li>
                <li>Prevent compression</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Use Arms for Direction
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Clarify movement direction</li>
                <li>Reach outward to expand space</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Extend Beyond Your Body
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Reach hands beyond body length -- INFINITELY!</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Connect Through Your Trunk
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Link different body parts</li>
                <li>Spiral (infinitely), don't scrunch!</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Stack Hips Over Legs
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Keep sit bones down</li>
                <li>Maintain soft knees</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Create Space Between Knees
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Send knees away from each other</li>
                <li>Activate during pliés and lunges</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-indigo-700 mb-3">
                Extend Your Reach
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Extend legs beyond length</li>
                <li>Create lightness in movement</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try the Interactive Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
