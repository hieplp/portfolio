import {motion} from "framer-motion";

const WavingHand = () => {
  return (
    <motion.span
      animate={{rotate: [0, 14, -8, 14, -4, 10, 0, 0]}}
      transition={{repeat: Infinity, duration: 2.5, ease: 'easeInOut'}}
      style={{display: 'inline-block', transformOrigin: '70% 70%'}}
    >
      👋🏻
    </motion.span>
  )
};


export default WavingHand;
