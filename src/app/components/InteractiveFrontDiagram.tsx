// InteractiveFrontDiagram.tsx

"use client";

import React, { useState, useRef } from "react";

// Descriptions for each body part, now focused on specific tools and actions
const partDescriptions: Record<
  string,
  { tool: string; description: string[] }
> = {
  Head: {
    tool: "Release the Head",
    description: ["Move head independently from body"],
  },
  Eyes: {
    tool: "Dance with Your Eyes",
    description: [
      "Initiate movement with eyes",
      "Connect with surrounding space",
    ],
  },
  "Shoulder Girdle": {
    tool: "Open the Shoulder Girdle",
    description: ["Create space between shoulders", "Send arms outward"],
  },
  Armpits: {
    tool: "Lighten the Armpits",
    description: ["Maintain airiness under arms", "Prevent compression"],
  },
  Arms: {
    tool: "Use Arms for Direction",
    description: [
      "Clarify movement direction",
      "Reach outward to expand space",
    ],
  },
  Hands: {
    tool: "Extend Beyond Your Body",
    description: ["Reach hands beyond body length -- INFINITELY!"],
  },
  Trunk: {
    tool: "Connect Through Your Trunk",
    description: [
      "Link different body parts",
      "Spiral (infinitely), don't scrunch!",
    ],
  },
  Hips: {
    tool: "Stack Hips Over Legs",
    description: ["Keep sit bones down", "Maintain soft knees"],
  },
  Legs: {
    tool: "Create Space Between Knees",
    description: [
      "Send knees away from each other",
      "Activate during pliés and lunges",
    ],
  },
  Feet: {
    tool: "Extend Your Reach",
    description: ["Extend legs beyond length", "Create lightness in movement"],
  },
};

const InteractiveFrontDiagram = () => {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  // Convert mouse event coordinates to SVG coordinates.
  const getSvgPoint = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (!svgRef.current) return null;
    const svgEl = svgRef.current;
    const pt = svgEl.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const ctm = svgEl.getScreenCTM();
    if (!ctm) return null;
    return pt.matrixTransform(ctm.inverse());
  };

  // Use isPointInFill on each group to detect clicks.
  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    const svgPt = getSvgPoint(e);
    if (!svgPt || !svgRef.current) return;
    const svgEl = svgRef.current;
    const groups = svgEl.querySelectorAll("[data-part]");
    const partsFound: string[] = [];

    groups.forEach((group) => {
      const partName = group.getAttribute("data-part");
      let isInside = false;
      group.childNodes.forEach((child) => {
        if (child instanceof SVGGeometryElement) {
          const ctm = child.getCTM();
          if (ctm) {
            const localPt = svgPt.matrixTransform(ctm.inverse());
            if (child.isPointInFill(localPt)) {
              isInside = true;
            }
          }
        }
      });
      if (isInside && partName) {
        partsFound.push(partName);
      }
    });
    setSelectedParts(Array.from(new Set(partsFound)));
    if (partsFound.length > 0) {
      setIsPopupOpen(true);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col sm:flex-row gap-4 p-4 w-full sm:min-w-[560px] justify-center">
        <div
          className="relative border border-gray-300 mx-auto"
          style={{
            width: "min(410px, 100%)",
            height: 742,
            aspectRatio: "410/742",
          }}
        >
          <img
            src="/front-body.png"
            alt="Front Body"
            className="absolute top-0 left-0 w-full h-full object-contain z-0 pointer-events-none"
          />
          <svg
            ref={svgRef}
            viewBox="0 0 410 742"
            className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
            onClick={handleSvgClick}
            preserveAspectRatio="xMidYMid meet"
          >
            {/*
            Wrap all groups in a parent group for slight scaling/translation if desired.
            (Using the same transform as before: translate(14,26) scale(0.95))
          */}
            <g transform="translate(10.1,18.7) scale(0.684)">
              {/* Group 1: Head (black) → mapped to "Head" */}
              <g data-part="Head" transform="translate(0, 20)">
                <path
                  d="M247 15L283.5 1H296.5L331.5 23.5L341.5 57.5V90L312 145H265.5L231.5 97V57.5L247 15Z"
                  stroke=""
                  fill="black"
                  fillOpacity="0"
                />
              </g>
              {/* Group 2: Eyes (red) → mapped to "Eyes" */}
              <g data-part="Eyes" transform="translate(0, 20)">
                {/* Left Eye */}
                <path
                  d="M257 61.5H278L293.5 54.5L315 61.5L323 77L295 87H265.5L247 77L257 61.5Z"
                  stroke=""
                  fill="#FF0000"
                  fillOpacity="0"
                />
                {/* Right Eye */}
                <path
                  d="M257 61.5H278L293.5 54.5L315 61.5L323 77L295 87H265.5L247 77L257 61.5Z"
                  stroke=""
                  fill="#FF0000"
                  fillOpacity="0"
                  transform="translate(30, 0)"
                />
              </g>
              {/* Group 3: Shoulder Girdle (blue) → mapped to "Shoulder Girdle" */}
              <g data-part="Shoulder Girdle">
                <path
                  d="M131 231L151 193L204.5 159L245.5 146.5L267 159L324.5 146.5L360 159L396.5 173L420.5 207L413.5 243.5L381 283.5L303.5 299L190.5 283.5L176.5 256.5L131 231Z"
                  stroke=""
                  fill="#0000FF"
                  fillOpacity="0"
                />
              </g>
              {/* Group 4: Armpits (green) → mapped to "Armpits" */}
              <g data-part="Armpits">
                <path
                  d="M149 327.5H193.5L211 295L193.5 249L137 231.5L118 260L127.5 308.5L149 327.5Z"
                  stroke=""
                  fill="#008000"
                  fillOpacity="0"
                />
                <path
                  d="M404.5 231.5L380 260V295V327.5L411 333L434 308.5L451.5 281.5L442.5 231.5H404.5Z"
                  stroke=""
                  fill="#008000"
                  fillOpacity="0"
                />
              </g>
              {/* Group 5: Arms (purple) → mapped to "Arms" */}
              <g data-part="Arms">
                <path
                  d="M53 523.5H83L138 422L151.5 353L177.5 291V265.5L151.5 252L97.5 341L66.5 465.5L53 523.5Z"
                  stroke=""
                  fill="#800080"
                  fillOpacity="0"
                />
                <path
                  d="M461 465.5L492.5 523.5L523.5 508.5L514 483L504.5 441L474.5 353L461 320.5L439.5 284L426 252L406 243.5L396.5 275L418 353L439.5 422L461 465.5Z"
                  stroke=""
                  fill="#800080"
                  fillOpacity="0"
                />
              </g>
              {/* Group 6: Hands (pink) → mapped to "Hands" */}
              <g data-part="Hands">
                <path
                  d="M23.5 634H53L78.5 612.5V581.5V552L60 519.5H34L1.5 564L23.5 612.5V634Z"
                  stroke=""
                  fill="#FFC0CB"
                  fillOpacity="0"
                  transform="translate(10, -5)"
                />
                <path
                  d="M491 581.5V519.5H533L568 564L557 612.5L533 634L491 612.5V581.5Z"
                  stroke=""
                  fill="#FFC0CB"
                  fillOpacity="0"
                  transform="translate(-5, 5)"
                />
              </g>
              {/* Group 7: Trunk (grey) → mapped to "Trunk" */}
              <g data-part="Trunk">
                <path
                  d="M266.5 192.5L188 208.5V349L181.5 431.5L188 510L222 530H291L330 522H389.5V495L379 435.5V406V364V327.5L399 297.5L379 231.5L361 192.5H266.5Z"
                  stroke=""
                  fill="#808080"
                  fillOpacity="0"
                />
              </g>
              {/* Group 8: Hips (brown) → mapped to "Hips" */}
              <g data-part="Hips">
                <path
                  d="M393.5 561.5H180V433L191 403L219.5 395L331.5 403H384L393.5 449V561.5Z"
                  stroke=""
                  fill="#A52A2A"
                  fillOpacity="0"
                />
              </g>
              {/* Group 9: Legs (yellow) → mapped to "Legs" */}
              <g data-part="Legs">
                <path
                  d="M260 915.5H226L201.5 810L214 733V688.5L178.5 598L188 441L273.5 522V564V733L260 915.5Z"
                  stroke=""
                  fill="#FFFF00"
                  fillOpacity="0"
                />
                <path
                  d="M319.5 873.5V915.5H353L362.5 885.5V773.5L353 733L377.5 648L388 580V441L343.5 479L293.5 522V541V688.5L307 746.5L293.5 799L319.5 873.5Z"
                  stroke=""
                  fill="#FFFF00"
                  fillOpacity="0"
                />
              </g>
              {/* Group 10: Feet (orange) → mapped to "Feet" */}
              <g data-part="Feet" transform="translate(0, -20)">
                <path
                  d="M216.5 975L226 921H258.5L269.5 985.5V1030H226L216.5 1007.5V975Z"
                  stroke=""
                  fill="#FFA500"
                  fillOpacity="0"
                />
                <path
                  d="M307 968L318 921H350.5V957.5L362.5 985.5L338 1030L307 1021V1007.5V968Z"
                  stroke=""
                  fill="#FFA500"
                  fillOpacity="0"
                />
              </g>
            </g>
          </svg>
        </div>

        {/* Desktop Description Panel */}
        <div className="hidden sm:block w-[180px] h-[742px] overflow-y-auto border border-gray-300 rounded-lg bg-white shadow-sm">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-indigo-900 mb-4 sticky -top-4 -mt-4 pt-4 bg-white pb-2 border-b border-gray-200 z-10">
              Movement Tools
            </h3>
            <div className="space-y-4">
              {selectedParts.length > 0 ? (
                selectedParts.map((part) => (
                  <div key={part} className="bg-indigo-50 rounded-lg p-3">
                    <h4 className="font-medium text-indigo-700 mb-2">
                      {partDescriptions[part].tool}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      {partDescriptions[part].description.map(
                        (point, index) => (
                          <li key={index}>{point}</li>
                        )
                      )}
                    </ul>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 mt-4">
                  <p>Click an area of the diagram for movement tools.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 sm:hidden">
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-indigo-900">
                  Movement Tools
                </h3>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {selectedParts.map((part) => (
                  <div key={part} className="bg-indigo-50 rounded-lg p-3">
                    <h4 className="font-medium text-indigo-700 mb-2">
                      {partDescriptions[part].tool}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      {partDescriptions[part].description.map(
                        (point, index) => (
                          <li key={index}>{point}</li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveFrontDiagram;
