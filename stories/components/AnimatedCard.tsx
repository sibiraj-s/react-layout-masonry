import { FC, useMemo, useRef } from 'react';
import { Variants, motion, useInView } from 'framer-motion';
import { useMasonryItem } from '../../src';
import getRandomAuthor from './random-author';

interface CardProps {
  url: string;
}

const variants: Variants = {
  inital: () => ({
    y: 50,
    opacity: 0,
  }),
  animate: (column: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: column * 0.2,
    },
  }),
  exit: (column: number) => ({
    y: -50,
    opacity: 0,
    transition: {
      duration: 1,
      delay: column * 0.2,
    },
  }),
};

const Card: FC<CardProps> = ({ url }) => {
  const { column } = useMasonryItem();

  const ref = useRef(null);
  const inView = useInView(ref);

  const author = useMemo(getRandomAuthor, []);

  return (
    <motion.div
      variants={variants}
      custom={column}
      initial="inital"
      animate={inView ? 'animate' : false}
      exit="exit"
      className="flex flex-col gap-4"
      ref={ref}
    >
      <img className="rounded-md shadow-md" src={url} alt="" />
      <div className="flex gap-2 items-center">
        <img src={url} className="h-8 w-8 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="text-lg leading-tight">{author.name}</span>
          <span className="!text-sm text-slate-500">{author.company}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
