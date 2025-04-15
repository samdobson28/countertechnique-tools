// InteractiveFrontDiagram.tsx

"use client";

import React, { useState, useRef } from "react";

// Descriptions for each body part.
const partDescriptions: Record<string, string> = {
  Head: "The head releases like a ball in a socket — it slides and circles, often in opposition to the body. → Letting the head move independently gives freedom and dynamic balance, especially in turns or falls.",
  Eyes: "See the room and dance with the eyes — they can initiate or respond to movement. → This expands awareness, facilitates directionality, and integrates the dancer with the space.",
  "Shoulder Girdle":
    "Open the shoulder girdle by sending the arms outwards — especially during directional changes like falls or swipes. → Creating space here allows energy to pass through the trunk more efficiently, enabling full-bodied movement and flow.",
  Armpits:
    "Allowing more air and lightness in the armpits supports overall suspension and ease — especially in moments like kicks or transitions. → Airiness here prevents compression and helps lift the upper body without extra muscular effort.",
  Arms: "Arms can clarify direction and redistribute momentum — either by reaching outward or pulling in to balance. → Choosing how to engage or contain the arms changes weight distribution and gives the dancer more control or freedom.",
  Hands:
    "Extend hands beyond the length of body and see your fingertips as you swipe.",
  Trunk:
    "The trunk connects everything — notice when to engage or release. The trunk can go after the leg. → Practicing delay or sequencing between parts allows momentum and flow rather than stiffness or over-control.",
  Hips: "Keep sit bones down and knees soft to stack hips with legs — especially during double bounce/swipe. → Bending the knees allows for openness and alignment in the pelvis, which supports suspension and balance.",
  Legs: "Send the knees away from each other (and keep sending them!) during pliés, falls, and lunges. This activates more space and energy in the lower body, enabling suspension and directional clarity in movement.",
  Feet: "Extend the leg beyond its length when traveling to allow a fall to float again — not just a stomp. → Finding length here increases lightness and traveling range, tying the fall to the next movement with flow.",
};

const InteractiveFrontDiagram = () => {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
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
          const ctm = child.getCTM(); // get the current transform matrix
          if (ctm) {
            // transform the click point to the element's local coordinate space
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
    console.log("Clicked SVG at", svgPt.x, svgPt.y, "found parts:", partsFound);
    setSelectedParts(Array.from(new Set(partsFound)));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-4 p-4 min-w-[560px] justify-center">
        <div
          className="relative border border-gray-300"
          style={{ width: 410, height: 742 }}
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
                <path
                  d="M257 61.5H278L293.5 54.5L315 61.5L323 77L295 87H265.5L247 77L257 61.5Z"
                  stroke=""
                  fill="#FF0000"
                  fillOpacity="0"
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

        {/* Right Panel: Display selected parts */}
        <div className="w-[180px] h-[742px] overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4 sticky top-0 bg-white pb-2 border-b border-gray-200">
            Selected Body Part(s)
          </h3>
          <div className="space-y-4">
            {selectedParts.length > 0 ? (
              selectedParts.map((part) => (
                <div key={part} className="bg-indigo-50 rounded-lg p-3">
                  <h4 className="font-medium text-indigo-700 mb-2">{part}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {partDescriptions[part] || "No description available."}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 mt-4">
                <p>Click an area of the diagram for details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFrontDiagram;
