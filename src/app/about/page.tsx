import Navbar from "../components/Navbar";
import Link from "next/link";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-6">
            About Countertechnique Tools
          </h1>

          <div className="space-y-8">
            <section className="bg-indigo-50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
                What is Countertechnique?
              </h2>
              <p className="text-gray-700 mb-4">
                Countertechnique is a contemporary dance technique developed by
                Anouk van Dijk. It provides tools for body and mind to deal with
                the demanding dance practice of the 21st century. The technique
                is based on principles of counter-direction, counter-tension,
                and counter-balance, helping dancers achieve greater efficiency,
                awareness, and freedom in their movement.
              </p>
              <p className="text-gray-700">
                Through its systematic approach, Countertechnique enables
                dancers to move bigger, more fluidly, and more spatially, while
                becoming stronger and more flexible. It helps dancers to be more
                in the moment, to be able to deal with the unexpected, and to be
                more present in their dancing.
              </p>
            </section>

            <section className="bg-purple-50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-purple-900 mb-4">
                About This Project
              </h2>
              <p className="text-gray-700 mb-4">
                This interactive tool was created by Sam Dobson for Francesca
                Dominguez's Modern IV Dance Class at Barnard College. It is
                designed to help students explore and understand the key
                principles of Countertechnique through interactive
                visualizations and exercises.
              </p>
              <Link
                href="https://github.com/samdobson28/countertechnique-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-6">
                Body Part Descriptions
              </h2>
              <div className="space-y-6">
                {Object.entries(partDescriptions).map(([part, description]) => (
                  <div
                    key={part}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                  >
                    <h3 className="text-xl font-medium text-indigo-600 mb-3">
                      {part}
                    </h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
