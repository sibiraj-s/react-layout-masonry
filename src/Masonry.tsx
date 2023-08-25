import { ElementType, ReactNode, forwardRef, useId } from 'react';

import { MasonryProps, PolymorphicRef } from './types';
import useMasonry from './useMasonry';
import { MasonryItemContext } from './context';

type MasonryComponent = <C extends ElementType = 'div'>(props: MasonryProps<C>) => ReactNode;

const MasonryBase = <T extends ElementType = 'div'>(props: MasonryProps<T>, forwaredRef: PolymorphicRef<T>) => {
  const { gap, as: Component = 'div', columnProps, columns, ...rest } = props;

  const uniq = useId();
  const columnsChildren = useMasonry(props.children, columns);

  return (
    <Component
      data-masonry-id={`Masonry-${uniq}`}
      {...rest}
      style={{ display: 'flex', gap, ...rest.style }}
      ref={forwaredRef}
    >
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
                <MasonryItemContext.Provider
                  value={{ column: index, position: childIndex }}
                  key={`Masonry__Column_Child_${uniq}_${childIndex}`}
                >
                  {child}
                </MasonryItemContext.Provider>
              );
            })}
          </Component>
        );
      })}
    </Component>
  );
};

export const Masonry = forwardRef(MasonryBase) as MasonryComponent;
