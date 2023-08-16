import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactElement } from 'react';

export type BreakPoints = Record<number, number>;
export type Columns = number | BreakPoints;

export type Components = {
  container?: ReactElement;
};

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<C extends ElementType, Props = {}> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<C extends ElementType, Props = {}> = PolymorphicComponentProp<C, Props> & {
  ref?: PolymorphicRef<C>;
};

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

export type MasonryProps<T extends ElementType> = PolymorphicComponentPropWithRef<
  T,
  PropsWithChildren<{
    columns: Columns;
    gap?: number;
    columnProps?: PolymorphicComponentPropWithRef<T, {}>;
  }>
>;
