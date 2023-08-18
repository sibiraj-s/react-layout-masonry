import type { FC } from 'react';

import Masonry, { Columns } from '../../../../src';
import Card from './Card';

interface DemoProps {
  images: string[];
  columns: Columns;
}

const Demo: FC<DemoProps> = ({ images, columns = 3 }) => {
  return (
    <Masonry columns={columns} className="tw-gap-6" columnProps={{ className: 'tw-gap-6 !tw-m-0' }}>
      {images.map((imageUrl) => (
        <Card url={imageUrl} key={imageUrl} />
      ))}
    </Masonry>
  );
};

export default Demo;
