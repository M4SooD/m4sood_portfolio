import { motion } from 'framer-motion';
import { FC } from 'react';

// variants
const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const NUMBER_OF_STAIRS = 6;

const reverseIndex = (index: number): number => {
  const totalSteps = NUMBER_OF_STAIRS;
  return totalSteps - index - 1;
};

const Stairs: FC = () => {
  return (
    <>
      {/* TODO #3: Use the new constant here. */}
      {[...Array(NUMBER_OF_STAIRS)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
