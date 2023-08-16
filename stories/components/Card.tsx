import { FC, useMemo } from 'react';
import getRandomAuthor from './random-author';

interface CardProps {
  url: string;
}

const Card: FC<CardProps> = ({ url }) => {
  const author = useMemo(getRandomAuthor, []);

  return (
    <div className="flex flex-col gap-4">
      <img className="rounded-md" src={url} alt="" />
      <div className="flex gap-4">
        <img src={url} className="h-8 w-8 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="text-lg leading-tight">{author.name}</span>
          <span className="!text-sm text-slate-500">{author.company}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
