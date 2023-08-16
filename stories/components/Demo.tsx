import { FC } from 'react';

import Masonry from '../../src';
import { Columns } from '../../src/types';
import Card from './Card';

interface DemoProps {
  images: string[];
  columns: Columns;
}

const Demo: FC<DemoProps> = ({ images, columns = 3 }) => {
  return (
    <Masonry columns={columns} gap={16} columnProps={{ className: '!gap-6' }}>
      {images.map((imageUrl) => (
        <Card url={imageUrl} key={imageUrl} />
      ))}
    </Masonry>
  );
};

export default Demo;
