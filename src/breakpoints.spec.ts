import { describe, expect, it } from 'vitest';
import findBreakpoint from './breakpoints';

const specs = [
  [640, 700],
  [640, 500],
  [640, 768],
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
});
