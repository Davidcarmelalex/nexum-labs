/**
 * Nexum Labs — XP Calculation Engine
 */
export const XP_TABLE = {
  easy: { base: 50, time_bonus: 10 },
  medium: { base: 150, time_bonus: 25 },
  hard: { base: 300, time_bonus: 50 },
  legendary: { base: 500, time_bonus: 100 },
} as const;

export function calculateXP(difficulty: keyof typeof XP_TABLE, score: number, maxScore: number, timeSecs: number): number {
  const { base, time_bonus } = XP_TABLE[difficulty];
  const scoreRatio = maxScore > 0 ? score / maxScore : 0;
  const speedBonus = timeSecs < 300 ? time_bonus : 0;
  return Math.round(base * scoreRatio + speedBonus);
}

export function xpToLevel(totalXP: number): number {
  // Each level requires 20% more XP than the last (exponential curve)
  let level = 1;
  let xpRequired = 100;
  let accumulated = 0;
  while (accumulated + xpRequired <= totalXP) {
    accumulated += xpRequired;
    xpRequired = Math.round(xpRequired * 1.2);
    level++;
  }
  return level;
}
