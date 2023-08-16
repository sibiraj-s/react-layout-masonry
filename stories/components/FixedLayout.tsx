import { FC } from 'react';

import Demo from './Demo';
import { fashion } from './images';

const FixedLayout: FC = () => {
  return <Demo images={fashion} columns={3} />;
};

export default FixedLayout;
