export type BodyPart =
  | "Legs"
  | "Feet"
  | "Hips"
  | "Trunk"
  | "Armpits"
  | "Head"
  | "Eyes";

export const tools: Record<BodyPart, string> = {
  Legs: `Send the knees away from each other (and keep sending them!) during pliés, falls, and lunges.`,
  Feet: `Extend the leg beyond its length when traveling to allow a fall to float again — not just a stomp.`,
  Hips: `Keep sit bones down and knees soft to stack hips with legs — especially during double bounce/swipe.`,
  Trunk: `The trunk connects everything — notice when to engage or release. The trunk can go after the leg.`,
  Armpits: `Lightness in armpits and direction in arms helps suspend the whole body — arms can direct or rebalance.`,
  Head: `The head releases like a ball in a socket — it slides and circles, often in opposition to the body.`,
  Eyes: `See the room and dance with the eyes — they can initiate or respond to movement.`,
};
