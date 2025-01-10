import { BreakPointSpec, BreakPoints, BreakPointsArray } from './types';

const defaultBreakpoints = [640, 786, 1024, 1280, 1536];

const arrayToBreakpoints = (breakPoints: BreakPointsArray): BreakPoints => {
  return breakPoints.reduce((obj, bpValue, bpIndex) => {
    if (typeof bpValue !== 'number') {
      return obj;
    }

    return {
      ...obj,
      [defaultBreakpoints[bpIndex]]: bpValue,
    };
  }, {});
};

export const normalizeBreakPoints = (breakPoints: BreakPointSpec): BreakPoints => {
  if (!Array.isArray(breakPoints)) {
    return breakPoints;
  }

  return arrayToBreakpoints(breakPoints);
};

const findBreakpoint = (breakpoints: BreakPointSpec, windowWidth: number): number => {
  const sortedBreakPoints = Object.keys(normalizeBreakPoints(breakpoints))
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
