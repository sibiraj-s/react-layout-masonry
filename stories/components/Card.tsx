import { FC } from 'react';

interface CardProps {
  url: string;
}

const Card: FC<CardProps> = ({ url }) => {
  return (
    <div className="flex flex-col gap-4">
      <img className="rounded-md" src={url} alt="" />
      <div className="flex gap-4">
        <img src={url} className="h-8 w-8 rounded-full object-cover" />
        <div className="flex flex-col leading-tight">
          <span className="text-lg">Jane Doe</span>
          <span className="!text-sm text-slate-500">Times, London</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
