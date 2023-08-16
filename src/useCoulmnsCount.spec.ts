import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useColumnsCount from './useCoulmnsCount';

const breakpoints = { 640: 1, 768: 2, 1024: 3, 1280: 4, 1536: 5 };

describe('UseCoulmnsCount', () => {
  it('should return fixed columns', () => {
    const { result } = renderHook(() => useColumnsCount(3));
    expect(result.current).toBe(3);
  });

  it('should return columns by breakpoints', () => {
    const originalInnerWidth = window.innerWidth;

    window.innerWidth = 600;
    const { result } = renderHook(() => useColumnsCount(breakpoints));
    expect(result.current).toBe(1);

    window.innerWidth = originalInnerWidth;
  });

  it('should default columns if no breakpoints found', () => {
    const { result } = renderHook(() => useColumnsCount({}));
    expect(result.current).toBe(3);
  });
});
