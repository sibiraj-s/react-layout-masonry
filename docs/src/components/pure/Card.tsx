import { FC, useMemo } from 'react';
import getRandomAuthor from './random-author';

interface CardProps {
  url: string;
}

const Card: FC<CardProps> = ({ url }) => {
  const author = useMemo(getRandomAuthor, []);

  return (
    <div className="tw-flex tw-flex-col tw-gap-4">
      <img className="tw-rounded-md tw-max-w-full" src={url} alt="" />
      <div className="tw-flex tw-flex-col !tw-mt-0">
        <span className="tw-text-lg">{author.name}</span>
        <span className="tw-text-sm tw-text-slate-500">{author.company}</span>
      </div>
    </div>
  );
};

export default Card;
