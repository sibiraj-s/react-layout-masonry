import { createContext, useContext } from 'react';

interface MasonryItemContextValues {
  column: number;
  position: number;
}

export const MasonryItemContext = createContext<MasonryItemContextValues>({
  column: 0,
  position: 0,
});

export const useMasonryItem = (): MasonryItemContextValues => useContext(MasonryItemContext);
