import { useMemo } from 'react';

import { Columns } from './types';
import useWindowWidth from './useWindowWidth';
import findBreakpoint from './breakpoints';

const DEFAULT_COLUMNS = 3;

const useColumnsCount = (columns?: Columns): number => {
  const isResponsive = typeof columns === 'object';

  const windowWidth = useWindowWidth(isResponsive);

  const columnsCount = useMemo(() => {
    if (!isResponsive) {
      return columns ?? DEFAULT_COLUMNS;
    }

    const breakPoint = findBreakpoint(columns, windowWidth);
    return columns[breakPoint] ?? DEFAULT_COLUMNS;
  }, [isResponsive, windowWidth, columns]);

  return columnsCount;
};

export default useColumnsCount;
