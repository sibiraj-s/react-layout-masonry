import { act } from 'react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import { afterEach, describe, expect, it } from 'vitest';

import Masonry from '../src';

const originalInnerWidth = window.innerWidth;
const breakpoints = { 640: 2, 1024: 4 };

const App = () => (
  <Masonry columns={breakpoints}>
    {Array.from({ length: 8 }, (_, index) => (
      <div key={index}>{index + 1}</div>
    ))}
  </Masonry>
);

// A real server has no window, which the previous implementation treated as width 0
const renderServerMarkup = () => {
  window.innerWidth = 0;
  return renderToString(<App />);
};

const countColumns = (container: Element) => container.querySelectorAll('[data-masonry-column]').length;

describe('Masonry: Server rendering', () => {
  let root: Root | undefined;

  afterEach(() => {
    act(() => root?.unmount());
    root = undefined;
    window.innerWidth = originalInnerWidth;
  });

  it('should render the smallest breakpoint on the server', () => {
    window.innerWidth = 1280;

    const container = document.createElement('div');
    container.innerHTML = renderToString(<App />);

    expect(countColumns(container)).toBe(2);
  });

  it('should hydrate without a mismatch and update to the client breakpoint', async () => {
    const container = document.createElement('div');
    container.innerHTML = renderServerMarkup();

    window.innerWidth = 1280;
    const errors: unknown[] = [];

    await act(async () => {
      root = hydrateRoot(container, <App />, {
        onRecoverableError: (error: unknown) => errors.push(error),
      });
    });

    expect(errors).toEqual([]);
    expect(countColumns(container)).toBe(4);
  });

  it('should keep items in order after hydrating to more columns', async () => {
    const container = document.createElement('div');
    container.innerHTML = renderServerMarkup();

    window.innerWidth = 1280;

    await act(async () => {
      root = hydrateRoot(container, <App />);
    });

    const columns = [...container.querySelectorAll('[data-masonry-column]')].map((column) => column.textContent);
    expect(columns).toEqual(['15', '26', '37', '48']);
  });
});
