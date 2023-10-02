# React Layout Masonry

> React Layout Masonry is a flexible and customizable React component for creating dynamic and fixed/responsive masonry
> layouts.

[![Tests](https://github.com/sibiraj-s/react-layout-masonry/actions/workflows/tests.yml/badge.svg)](https://github.com/sibiraj-s/react-layout-masonry/actions/workflows/tests.yml)
[![NPM](https://badgen.net/npm/v/react-layout-masonry)](https://www.npmjs.com/package/react-layout-masonry)

## Installation

You can install React Layout Masonry using npm, pnpm or yarn:

```bash
npm install react-layout-masonry
```

or

```bash
pnpm install react-layout-masonry
```

or

```bash
yarn add react-layout-masonry
```

## Usage

### Fixed Columns Layout

Here's an example of how to use React Layout Masonry with a fixed number of columns in your React application:

```jsx
import Masonry from 'react-layout-masonry';

const FixedColumnsMasonry = () => {
  return (
    <Masonry
      columns={3}
      gap={16}
    >
      {items.map((item) => {
        return <Item {...item} />;
      })}
    </Masonry>
  );
};

export default FixedColumnsMasonry;
```

### Responsive Columns Layout

Here's an example of how to use React Layout Masonry with responsive columns in your React application:

```jsx
import Masonry from 'react-layout-masonry';

const ResponsiveColumnsMasonry = () => {
  return (
    <Masonry
      columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }}
      gap={16}
    >
      {items.map((item) => {
        return <Item {...item} />;
      })}
    </Masonry>
  );
};

export default ResponsiveColumnsMasonry;
```

or use the array syntax

```js
<Masonry columns={[1, undefined, undefined, 3]} />
```

this will be converted to

```json
{
  "640": 1,
  "1280": 3
}
```

The array's order corresponds to the default breakpoints, which are `640, 786, 1024, 1280, 1536`.

### Column Props

The `columnProps` prop allows you to apply additional props to the container of each column. Here's an example:

```jsx
<Masonry
  columns={3}
  gap={16}
  columnProps={{
    className: 'custom-column',
    style: { backgroundColor: 'lightgray' },
  }}
>
  {/* ... */}
</Masonry>
```

## Props

- `columns` (number or object, required): The number of columns in the masonry layout, or an object with breakpoints and corresponding column counts.
- `gap` (number, optional): The spacing between columns and rows in pixels. Defaults to 0.
- `columnProps` (object, optional): Additional props to be applied to each column, such as className for styling.

## Examples

For examples, usage and customization options, please refer to the [docs](docs/src/components/) directory in this repository.

## Contributing

If you encounter any issues or have questions, please [open an issue](https://github.com/sibiraj-s/react-layout-masonry/issues)
on our GitHub repository. Make sure to create an issue or discussion first before raising a PR

## License

React Layout Masonry is open-source software licensed under the [MIT License](LICENSE).
