import { Children, ReactNode, isValidElement, useMemo } from 'react';

import useColumnsCount from './useCoulmnsCount';
import { Columns } from './types';

const useMasonry = (children: ReactNode, columns: Columns): ReactNode[][] => {
  const columnsCount = useColumnsCount(columns);

  const columnsChildren = useMemo(() => {
    const group: ReactNode[][] = Array.from({ length: columnsCount }, () => []);

    Children.forEach(children, (child, index) => {
      if (isValidElement(child)) {
        const columnNum = index % columnsCount;
        group[columnNum].push(child);
      }
    });

    return group;
  }, [columnsCount, children]);

  return columnsChildren;
};

export default useMasonry;
