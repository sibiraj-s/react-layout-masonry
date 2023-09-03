import { type FC, useEffect, useRef, useState } from 'react';
import { AnimatePresence, type Variants, motion, useInView } from 'framer-motion';

import { diy, fashion, food } from './images';
import Masonry from '../../../../src';
import Card from './AnimatedCard';

const variants: Variants = {
  inital: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      bounce: 0,
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.8,
    },
  },
};

const collections = [food, fashion, diy];

const AnimatedLayout: FC = () => {
  const [currentCollection, setCurrentCollection] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    const timeIndex = setInterval(() => {
      if (!inView) {
        return;
      }
      setCurrentCollection((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex === collections.length) {
          return 0;
        }

        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(timeIndex);
  }, [inView]);

  return (
    <div className="pt-16" ref={ref}>
      {collections.map((collection, index) => (
        <AnimatePresence key={`Collection__${index}`} mode="popLayout">
          {currentCollection === index && (
            <Masonry
              columns={{ 640: 1, 768: 2, 1024: 3, 1280: 4, 1536: 5 }}
              as={motion.div}
              variants={variants}
              initial="initial"
              animate={inView ? 'animate' : false}
              exit="exit"
              className="gap-6"
              columnProps={{
                className: 'gap-y-8',
              }}
            >
              {collection.map((imageUrl) => (
                <Card url={imageUrl} key={imageUrl} />
              ))}
            </Masonry>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};

export default AnimatedLayout;
