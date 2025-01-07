import {motion} from 'framer-motion';
import {TypeAnimation} from "react-type-animation";
import {HoverScale, WavingHand} from "../../../components";
import {useSocialStore} from "../../../stores/social.store.ts";
import {cn} from "../../../lib/utils.ts";
import {Fragment} from "react";
import {FaRegHandPointDown} from "react-icons/fa";
import {useLenis} from "lenis/react";

const SocialLinks = () => {
  const {aboutItems} = useSocialStore();
  return (
    <Fragment>
      <div className="flex space-x-3">
        {aboutItems.map((item, index) => (
          <HoverScale key={index}>
            <a
              href={item.link}
              className="text-neutral-400 tooltip tooltip-bottom"
              aria-label={item.id}
              data-tip={item.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <item.icon className={cn(
                "text-3xl",
                'hover:text-white',
              )}/>
            </a>
          </HoverScale>
        ))}
      </div>

    </Fragment>
  )
}

const ScrollDown = () => {
  const lenis = useLenis();
  return (
    <button
      className="flex flex-col items-center group motion-safe:animate-bounce text-neutral-400 space-y-2"
      onClick={() => lenis?.scrollTo('#expertise')}
    >
      <p className="group-hover:text-white">
        Scroll down to see more
      </p>
      <div className="group-hover:text-white">
        <div className="flex justify-center">
          <FaRegHandPointDown className="text-2xl"/>
        </div>
      </div>
    </button>
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
      <div className="container max-w-screen-2xl mx-auto items-center tracking-tight leading-[120%]">
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
              "Specialize in Java with Vert.x.",
              300,
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

        <div className="mt-10">
          <SocialLinks/>
        </div>
      </div>

      <div className="absolute bottom-10 w-full justify-center items-center flex">
        <ScrollDown/>
      </div>

    </motion.section>
  )
}
