import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import useWindowWidth from '../src/useWindowWidth';

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

  it('should not re-render on resize when isResponsive is false', () => {
    let renders = 0;
    const { result } = renderHook(() => {
      renders += 1;
      return useWindowWidth(false);
    });
    expect(result.current).toBe(originalInnerWidth);

    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
    });

    expect(renders).toBe(1);
    expect(result.current).toBe(originalInnerWidth);
  });

  it('should return the server width when rendered on the server', () => {
    window.innerWidth = 1280;

    const Width = () => createElement('span', null, useWindowWidth());

    expect(renderToString(createElement(Width))).toBe('<span>0</span>');
  });
});
