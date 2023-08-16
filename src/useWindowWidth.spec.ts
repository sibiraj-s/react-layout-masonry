import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import useWindowWidth from './useWindowWidth';

const originalInnerWidth = window.innerWidth;

describe('UseWindowWidth', () => {
  afterEach(() => {
    window.innerWidth = originalInnerWidth;
  });

  it('should return defualt window width', () => {
    const { result } = renderHook(() => useWindowWidth());
    expect(result.current).toBe(originalInnerWidth);
  });

  it('should return new width on resize', () => {
    const { result, rerender } = renderHook(() => useWindowWidth());
    expect(result.current).toBe(originalInnerWidth);

    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    rerender();

    expect(result.current).toBe(500);
  });

  it('should not return new width on resize when isResponsive is false', () => {
    const { result, rerender } = renderHook(() => useWindowWidth(false));
    expect(result.current).toBe(originalInnerWidth);

    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    rerender();

    expect(result.current).toBe(originalInnerWidth);
  });
});
