import { ElementType, ReactNode, forwardRef, useId } from 'react';

import { MasonryProps, PolymorphicRef } from './types';
import useMasonry from './useMasonry';
import { MasonryItemContext } from './context';

type MasonryComponent = <C extends React.ElementType = 'div'>(props: MasonryProps<C>) => ReactNode;

const Masonry: MasonryComponent = forwardRef(
  <T extends ElementType = 'div'>(props: MasonryProps<T>, forwaredRef: PolymorphicRef<T>) => {
    const { gap = 0, as: Component = 'div', columnProps, ...rest } = props;
    const columnsChildren = useMasonry(props.children, props.columns);

    const masonryId = useId();

    return (
      <Component style={{ display: 'flex', gap }} ref={forwaredRef} {...rest}>
        {columnsChildren.map((column, index) => {
          return (
            <Component
              key={`Masonry__Column_${masonryId}_${index}`}
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                gap,
              }}
              {...columnProps}
            >
              {column.map((child, childIndex) => {
                return (
                  <MasonryItemContext.Provider
                    value={{ column: index, position: childIndex }}
                    key={`Masonry__Column_Child_${masonryId}_${childIndex}`}
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
  },
);

export default Masonry;