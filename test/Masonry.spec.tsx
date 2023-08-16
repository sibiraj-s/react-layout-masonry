import { afterEach, describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';

import Masonry from '../src';

const createItems = (count: number) => Array.from({ length: count }, (_, index) => index + 1);
const originalInnerWidth = window.innerWidth;

describe('Masonry: Fixed Columns', () => {
  it('should render items', () => {
    const items = createItems(1);

    const { container } = render(
      <Masonry columns={3}>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </Masonry>,
    );

    expect(container.querySelectorAll('[data-masonry-column]').length).toBe(1);
  });

  it('should render items in 3 column layout by default', () => {
    const items = createItems(4);

    const { container } = render(
      <Masonry>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </Masonry>,
    );

    expect(container.querySelectorAll('[data-masonry-column]').length).toBe(3);
  });

  it('should render items in given columns', () => {
    const items = createItems(10);

    const { container } = render(
      <Masonry columns={5}>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </Masonry>,
    );

    expect(container.querySelectorAll('[data-masonry-column]').length).toBe(5);
  });

  it('should render items in given columns', () => {
    const items = createItems(10);

    const { container } = render(
      <Masonry columns={5}>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </Masonry>,
    );

    expect(container.querySelectorAll('[data-masonry-column]').length).toBe(5);
  });
});

describe('Masonry: Responsive Columns', () => {
  afterEach(() => {
    window.innerWidth = originalInnerWidth;
  });

  const breakpoints = { 640: 1, 768: 2, 1024: 3, 1280: 4, 1536: 5 };
  const breakpointSpec = Object.entries(breakpoints).map(([key, value]) => [value <= 1 ? 1 : value - 1, Number(key)]);
  const items = createItems(10);

  it.each(breakpointSpec)('should render %i columns with breakpoint %1', (noOfColumns, windowWidth) => {
    window.innerWidth = windowWidth;

    const { container } = render(
      <Masonry columns={breakpoints}>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </Masonry>,
    );

    expect(container.querySelectorAll('[data-masonry-column]').length).toBe(noOfColumns);
  });
});
