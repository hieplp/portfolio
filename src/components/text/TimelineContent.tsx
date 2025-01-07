import {animate, motion, spring, useInView} from 'framer-motion';
import {Fragment, ReactNode, RefObject, useEffect, useRef} from "react";
import ReactLenis from "lenis/react";





export const TimelineContent = ({
                                  children,
                                  animationNum,
                                  timelineRef,
                                }: {
  children: ReactNode;
  animationNum: number;
  timelineRef: RefObject<HTMLDivElement>;
}) => {
  const sequenceVariants = {
    visible: (i: number) => ({
      filter: 'blur(0px)',

      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3, // Delay each item by 0.5s multiplied by its index
        duration: 0.5, // Duration of the blur removal
      },
    }),
    hidden: {
      filter: 'blur(20px)',
      y: 0,
      opacity: 0,
    },
  };
  const isInView = useInView(timelineRef, {
    once: false,
    // margin: '0px 0px 400px 0px',
  });
  return (
    <Fragment>
      <motion.div
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        custom={animationNum}
        variants={sequenceVariants}
      >
        {children}
      </motion.div>
    </Fragment>
  );
};
