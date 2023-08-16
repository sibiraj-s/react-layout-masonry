import { BreakPoints } from './types';

const findBreakpoint = (breakpoints: BreakPoints, windowWidth: number): number => {
  const sortedBreakPoints = Object.keys(breakpoints)
    .map(Number)
    .sort((a, b) => a - b);

  let bp = null;

  for (const breakPoint of sortedBreakPoints) {
    if (windowWidth > breakPoint) {
      bp = breakPoint;
    }
  }

  return bp ?? sortedBreakPoints[0];
};

export default findBreakpoint;
