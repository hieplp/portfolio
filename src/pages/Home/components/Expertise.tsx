import {ReactNode, useEffect} from 'react';
import {animate, scroll, spring} from 'framer-motion';
import TextAnimation from "../../../components/text/TextAnimation.tsx";
import {CaroBackground} from "../../../components";
import classNames from "../../../lib/classNames.ts";

const SlideItem = ({children, className}: {
  children: ReactNode,
  className?: string
}) => {
  return (
    <li className={classNames('h-screen min-w-full w-screen overflow-hidden relative', className)}>
      {children}
    </li>
  )
}

const Intro = () => {
  return (
    <SlideItem className="rounded-t-2xl bg-gray-300">
      <CaroBackground className="flex justify-center items-center">
        <TextAnimation
          text="Let me share about my expertise 😎"
          as='div'
          variants={{
            hidden: {filter: 'blur(10px)', opacity: 0, y: 20},
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: {ease: 'linear'},
            },
          }}
          classname='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'
        />
      </CaroBackground>
    </SlideItem>
  )
}

const BackendIntro = () => {
  return (
    <SlideItem className="rounded-t-2xl bg-gray-300">
      <CaroBackground>
        <h2 className='text-[20vw] font-semibold relative bottom-5 inline-block text-black'>
          BACKEND
        </h2>
      </CaroBackground>
    </SlideItem>
  );
}

const FrontendIntro = () => {
  return (
    <SlideItem className="rounded-t-2xl bg-gray-300">
      <CaroBackground>
        <h2 className='text-[20vw] font-semibold relative bottom-5 inline-block text-black'>
          FRONTEND
        </h2>
      </CaroBackground>
    </SlideItem>
  );
}

const DevOpsIntro = () => {
  return (
    <SlideItem className="rounded-t-2xl bg-gray-300">
      <CaroBackground>
        <h2 className='text-[20vw] font-semibold relative bottom-5 inline-block text-black'>
          DEVOPS
        </h2>
      </CaroBackground>
    </SlideItem>
  );
}

export default function Expertise() {

  useEffect(() => {
    const items = document.querySelectorAll('#expertise li');

    const controls = animate(
      "#expertise ul",
      {
        transform: ['none', `translateX(-${items.length - 1}00vw)`],
        // transform: ['none', `translateX(-${items.length - 1}00vw) translateY(100vh)`],
      },
      {ease: spring()}
    );
    scroll(controls, {target: document.querySelector('#expertise')});
  }, []);

  return (
    <section
      id="expertise"
      className='h-[400vh] bg-gray-300 text-black relative'
    >
      <ul className='flex sticky top-0 flex-row gap-1 '>
        <Intro/>
        <BackendIntro/>
        <FrontendIntro/>
        <DevOpsIntro/>
      </ul>
    </section>
  )
}
