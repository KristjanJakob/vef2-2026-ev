type Scores = {
  analytical: number;
  creative: number;
  social: number;
  hands: number;
};

export function calculateScores(
  interest: string,
  confidence: number,
  answer2: string,
  answer3: string
): Scores {
  const scores: Scores = {
    analytical: 0,
    creative: 0,
    social: 0,
    hands: 0,
  };

  // Spurning 1
  if (interest === 'math') scores.analytical += 3;
  if (interest === 'art') scores.creative += 3;
  if (interest === 'people') scores.social += 3;
  if (interest === 'tech') scores.hands += 2;

  // Spurning 2
  if (answer2 === 'numbers' || answer2 === 'patterns') scores.analytical += 2;
  if (answer2 === 'logic') scores.analytical += 3;

  if (answer2 === 'design' || answer2 === 'ideas') scores.creative += 3;
  if (answer2 === 'media') scores.creative += 2;

  if (answer2 === 'help' || answer2 === 'teach') scores.social += 3;
  if (answer2 === 'communicate') scores.social += 2;

  if (answer2 === 'coding' || answer2 === 'systems') scores.analytical += 2;
  if (answer2 === 'hardware') scores.hands += 3;

  if (answer3 === 'research' || answer3 === 'analyze') scores.analytical += 2;
  if (answer3 === 'creative') scores.creative += 2;
  if (answer3 === 'team' || answer3 === 'support') scores.social += 2;
  if (answer3 === 'build' || answer3 === 'solve') scores.hands += 2;

  if (confidence >= 7) scores.analytical += 2;
  if (confidence <= 3) scores.hands += 1;

  return scores;
}