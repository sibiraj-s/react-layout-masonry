import type { FC } from 'react';

import Demo from './Demo';
import { diy } from './images';

const skeletonHeights = [
  ['h-72', 'h-48', 'h-64'],
  ['h-52', 'h-80', 'h-44'],
  ['h-64', 'h-56', 'h-72'],
];

const Skeleton: FC = () => {
  return (
    <div className="flex gap-6" aria-busy="true" aria-label="Loading">
      {skeletonHeights.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-1 flex-col gap-6">
          {column.map((height, index) => (
            <div key={index} className={`${height} animate-pulse rounded-md bg-slate-200 dark:bg-slate-700`} />
          ))}
        </div>
      ))}
    </div>
  );
};

const FallbackLayout: FC = () => {
  return <Demo images={diy} columns={{ 640: 1, 768: 2, 1024: 3, 1280: 4 }} fallback={<Skeleton />} />;
};

export default FallbackLayout;
