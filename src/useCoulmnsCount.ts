import { useMemo } from 'react';

import { Columns } from './types';
import useWindowWidth from './useWindowWidth';

const DEFAULT_COLUMNS = 3;

const useColumnsCount = (columns: Columns): number => {
  const isResponsive = typeof columns === 'object';

  const windowWidth = useWindowWidth(isResponsive);

  const columnsCount = useMemo(() => {
    if (!isResponsive) {
      return columns;
    }

    const breakPoints = columns;

    let selectedBreakpoint: null | number = null;

    for (const breakPoint in breakPoints) {
      if (windowWidth >= parseInt(breakPoint)) {
        selectedBreakpoint = breakPoints[breakPoint];
      } else {
        // Break the loop since we found the appropriate breakpoint
        break;
      }
    }

    return selectedBreakpoint ?? DEFAULT_COLUMNS;
  }, [isResponsive, windowWidth, columns]);

  return columnsCount;
};

export default useColumnsCount;
