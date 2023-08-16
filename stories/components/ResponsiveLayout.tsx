import { FC } from 'react';

import Demo from './Demo';
import { food } from './images';

const ResponsiveLayout: FC = () => {
  return <Demo images={food} columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} />;
};

export default ResponsiveLayout;
