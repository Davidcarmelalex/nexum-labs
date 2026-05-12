import { calculateXP, xpToLevel } from '../lib/xp';

describe('XP Engine', () => {
  it('awards full XP for perfect score', () => {
    const xp = calculateXP('easy', 100, 100, 200);
    expect(xp).toBe(60); // 50 base + 10 speed bonus
  });
  it('awards partial XP for half score', () => {
    const xp = calculateXP('medium', 50, 100, 400);
    expect(xp).toBe(75); // 150 * 0.5 = 75, no speed bonus
  });
  it('level 1 at 0 XP', () => expect(xpToLevel(0)).toBe(1));
  it('levels up at 100 XP', () => expect(xpToLevel(100)).toBe(2));
});
