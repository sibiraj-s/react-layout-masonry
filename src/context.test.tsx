import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { MasonryItemContext, useMasonryItem } from './context';
import { FC, PropsWithChildren } from 'react';

const ItemConsumer = () => {
  const { column, position } = useMasonryItem();
  return (
    <div>
      <p>Column: {column}</p>
      <p>Position: {position}</p>
    </div>
  );
};

describe('MasonryItemContext', () => {
  it('should render the default values', () => {
    const { getByText } = render(<ItemConsumer />);
    expect(getByText('Column: 0')).toBeTruthy();
    expect(getByText('Position: 0')).toBeTruthy();
  });

  it('should render the given context', () => {
    const Wrapper: FC<PropsWithChildren> = ({ children }) => (
      <MasonryItemContext.Provider value={{ column: 3, position: 2 }}>{children}</MasonryItemContext.Provider>
    );

    const { getByText } = render(<ItemConsumer />, { wrapper: Wrapper });
    expect(getByText('Column: 3')).toBeTruthy();
    expect(getByText('Position: 2')).toBeTruthy();
  });
});
