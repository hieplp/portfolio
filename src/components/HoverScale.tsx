import {ReactNode} from "react";
import {motion} from "framer-motion";

const HoverScale = ({children}: {
  children: ReactNode
}) => {
  return (
    <motion.div
      whileHover={{scale: 1.2}}
      whileTap={{scale: 0.8}}
    >
      {children}
    </motion.div>
  )
}

export default HoverScale;
