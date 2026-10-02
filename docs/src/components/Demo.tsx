import type { FC, ReactNode } from 'react';

import Masonry, { type Columns } from '../../../src';
import Card from './Card';

interface DemoProps {
  images: string[];
  columns: Columns;
  fallback?: ReactNode;
}

const Demo: FC<DemoProps> = ({ images, columns = 3, fallback }) => {
  return (
    <Masonry columns={columns} fallback={fallback} className="gap-6" columnProps={{ className: 'gap-6 !m-0' }}>
      {images.map((imageUrl) => (
        <Card url={imageUrl} key={imageUrl} />
      ))}
    </Masonry>
  );
};

export default Demo;
