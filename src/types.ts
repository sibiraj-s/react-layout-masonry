import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactElement } from 'react';

export type Columns = number | Record<number, number>;

export type Components = {
  container?: ReactElement;
};

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

// This is the first reusable type utility we built
type PolymorphicComponentProp<C extends ElementType, Props = {}> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// This is a new type utitlity with ref!
type PolymorphicComponentPropWithRef<C extends ElementType, Props = {}> = PolymorphicComponentProp<C, Props> & {
  ref?: PolymorphicRef<C>;
};

// This is the type for the "ref" only
export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type MasonryProps<T extends ElementType> = PolymorphicComponentPropWithRef<
  T,
  PropsWithChildren<{
    columns: Columns;
    gap?: number;
    columnProps?: PolymorphicComponentPropWithRef<T, {}>;
  }>
>;
