import {motion} from 'framer-motion';
import {TypeAnimation} from "react-type-animation";

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
}

export default function About() {
  return (
    <motion.section
      id="about"
      className='text-white h-screen w-full bg-slate-950 grid sticky top-0 items-center justify-center'
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, ease: 'easeOut'}}
    >
      <div className="container max-w-screen-lg mx-auto items-center tracking-tight leading-[120%]">

        <p className="text-6xl">
          Hi, I'm <span className="text-7xl font-bold"> Ly Phuoc Hiep. </span>
          <WavingHand/>
        </p>

        <p className="text-3xl mt-10">
          <TypeAnimation
            sequence={[
              //
              "A passionate Software Engineer with over 4 years of experience.",
              300,
              // Java
              "Specialize in Java with Spring Framework.",
              300,
              //
              "Specialize in Java with Vert.x.",
              300,
              //
              "Specialize in Java with JPA.",
              300,
              // JavaScript/TypeScript
              "Also specialize in JavaScript/TypeScript with React.",
              300,
              "Also specialize in JavaScript/TypeScript with JQuery.",
              300,
              "Also specialize in JavaScript/TypeScript with VueJS.",
              300,
              "Also specialize in JavaScript/TypeScript with TailwindCSS.",
              300,
              //
              "Love to create robust, scalable, and maintainable software.",
              300,
              "And love to learn new technologies and frameworks.",
              300,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </p>
      </div>
    </motion.section>
  )
}
