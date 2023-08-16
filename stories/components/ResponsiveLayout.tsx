import { FC } from 'react';

import Demo from './Demo';
import { food } from './images';

const ResponsiveLayout: FC = () => {
  return <Demo images={food} columns={3} />;
};

export default ResponsiveLayout;
