'use client';

import { ElementType, useId } from 'react';

import { MasonryProps } from './types';
import useMasonry from './useMasonry';
import { MasonryItemContext } from './context';

export const Masonry = <T extends ElementType = 'div'>(props: MasonryProps<T>) => {
  const { gap, as: Component = 'div', columnProps, columns, ref, ...rest } = props;

  const uniq = useId();
  const columnsChildren = useMasonry(props.children, columns);

  return (
    <Component {...rest} data-masonry-id={`Masonry-${uniq}`} style={{ display: 'flex', gap, ...rest.style }} ref={ref}>
      {columnsChildren.map((column, index) => {
        return (
          <Component
            key={`Masonry__Column_${uniq}_${index}`}
            data-masonry-column={index + 1}
            {...columnProps}
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              gap,
              ...columnProps?.style,
            }}
          >
            {column.map((child, childIndex) => {
              return (
                <MasonryItemContext
                  value={{ column: index, position: childIndex }}
                  key={`Masonry__Column_Child_${uniq}_${childIndex}`}
                >
                  {child}
                </MasonryItemContext>
              );
            })}
          </Component>
        );
      })}
    </Component>
  );
};

export default Masonry;
