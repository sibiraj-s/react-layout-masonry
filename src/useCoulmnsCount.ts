import { useMemo } from 'react';

import { Columns } from './types';
import useWindowWidth from './useWindowWidth';

const DEFAULT_COLUMNS_COUNT = 3;

const useColumnsCount = (columns: Columns): number => {
  const isResponsive = typeof columns === 'object';

  const windowWidth = useWindowWidth(isResponsive);

  const columnsCount = useMemo(() => {
    if (!isResponsive) {
      return columns;
    }

    const breakPoints = Object.keys(columns)
      .map(Number)
      .sort((a, b) => a - b);

    let count = breakPoints.length > 0 ? columns[breakPoints[0]] : DEFAULT_COLUMNS_COUNT;

    breakPoints.forEach((breakPoint) => {
      if (breakPoint < windowWidth) {
        count = columns[breakPoint];
      }
    });

    return count;
  }, [isResponsive, windowWidth, columns]);

  return columnsCount;
};

export default useColumnsCount;
