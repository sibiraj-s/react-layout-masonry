import { describe, expect, it } from 'vitest';

import findBreakpoint, { normalizeBreakPoints } from '../src/breakpoints';

// array of [expectedBreakpoint, windowWidth]
const specs = [
  [640, 700],
  [640, 500],
  [768, 768],
  [768, 780],
  [1024, 1030],
  [1280, 1300],
  [1536, 1800],
];
const breakpoints = { 640: 1, 768: 2, 1024: 3, 1280: 4, 1536: 5 };

describe('BreakPoints', () => {
  it.each(specs)('should return breakpoint `%i` for window width `%i` correctly', (expectedBp, windowWidth) => {
    expect(findBreakpoint(breakpoints, windowWidth)).toBe(expectedBp);
  });

  it('should return object breakpoints as is', () => {
    expect(normalizeBreakPoints(breakpoints)).toBe(breakpoints);
  });

  it('should map array of breakpoints correctly', () => {
    expect(normalizeBreakPoints([1, 2, 3, 4, 5])).toMatchObject({
      640: 1,
      786: 2,
      1024: 3,
      1280: 4,
      1536: 5,
    });

    expect(normalizeBreakPoints([1, undefined, 3, undefined, 5])).toMatchObject({
      640: 1,
      1024: 3,
      1536: 5,
    });
  });
});
