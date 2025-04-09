"use client";

import { useState } from "react";
import { BodyPart, tools } from "../data/tools";
import ToolModal from "./ToolModal";

const BodyDiagram = () => {
  const [selectedPart, setSelectedPart] = useState<BodyPart | null>(null);

  const handleClick = (part: BodyPart) => {
    setSelectedPart(part);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <svg
        viewBox="0 0 400 800"
        className="w-[300px] h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* HEAD */}
        <circle
          cx="200"
          cy="80"
          r="40"
          fill="#f3f4f6"
          stroke="black"
          onClick={() => handleClick("Head")}
        />

        {/* EYES */}
        <circle
          cx="185"
          cy="75"
          r="5"
          fill="black"
          onClick={() => handleClick("Eyes")}
        />
        <circle
          cx="215"
          cy="75"
          r="5"
          fill="black"
          onClick={() => handleClick("Eyes")}
        />

        {/* TRUNK */}
        <rect
          x="160"
          y="120"
          width="80"
          height="150"
          fill="#e5e7eb"
          stroke="black"
          onClick={() => handleClick("Trunk")}
        />

        {/* ARMPITS */}
        <rect
          x="140"
          y="130"
          width="20"
          height="40"
          fill="#d1d5db"
          stroke="black"
          onClick={() => handleClick("Armpits")}
        />
        <rect
          x="240"
          y="130"
          width="20"
          height="40"
          fill="#d1d5db"
          stroke="black"
          onClick={() => handleClick("Armpits")}
        />

        {/* HIPS */}
        <rect
          x="160"
          y="270"
          width="80"
          height="50"
          fill="#e5e7eb"
          stroke="black"
          onClick={() => handleClick("Hips")}
        />

        {/* LEGS */}
        <rect
          x="165"
          y="320"
          width="25"
          height="140"
          fill="#fef3c7"
          stroke="black"
          onClick={() => handleClick("Legs")}
        />
        <rect
          x="210"
          y="320"
          width="25"
          height="140"
          fill="#fef3c7"
          stroke="black"
          onClick={() => handleClick("Legs")}
        />

        {/* FEET */}
        <rect
          x="165"
          y="460"
          width="25"
          height="20"
          fill="#fcd34d"
          stroke="black"
          onClick={() => handleClick("Feet")}
        />
        <rect
          x="210"
          y="460"
          width="25"
          height="20"
          fill="#fcd34d"
          stroke="black"
          onClick={() => handleClick("Feet")}
        />
      </svg>

      {selectedPart && (
        <ToolModal part={selectedPart} onClose={() => setSelectedPart(null)} />
      )}
    </div>
  );
};

export default BodyDiagram;
