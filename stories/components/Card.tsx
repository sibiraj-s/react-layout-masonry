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
      <div className="flex flex-col">
        <span className="text-lg">{author.name}</span>
        <span className="!text-sm text-slate-500">{author.company}</span>
      </div>
    </div>
  );
};

export default Card;
