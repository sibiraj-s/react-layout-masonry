import { describe, expect, it } from 'vitest';
import React, { isValidElement } from 'react';
import { renderHook } from '@testing-library/react';

import { useMasonry } from '../src';

const createChildrens = (count: number) =>
  Array.from({ length: count }, (_, index) => <div key={`FakeChildren__${index}`} />);

describe('UseMasonry', () => {
  it('should return children correctly', () => {
    interface RenderHookProps {
      children: number;
      columns?: number;
    }
    const { result, rerender } = renderHook((props: RenderHookProps = { children: 1 }) => {
      return useMasonry(createChildrens(props.children), props.columns);
    });
    expect(result.current.length).toBe(1);

    rerender({ children: 4 });
    expect(result.current.length).toBe(3);

    rerender({ children: 4 });
    expect(result.current.length).toBe(3);

    rerender({ children: 10, columns: 3 });
    expect(result.current.length).toBe(3);

    rerender({ children: 10, columns: 4 });
    expect(result.current.length).toBe(4);

    result.current.forEach((column) => {
      column.forEach((item) => {
        expect(isValidElement(item)).toBe(true);
      });
    });
  });
});
