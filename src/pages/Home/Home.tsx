import {lazy} from "react";
import ReactLenis from "lenis/react";
import Navbar from "../../components/Navbar";

const About = lazy(() => import('./components/About.tsx'));
const Expertise = lazy(() => import('./components/Expertise.tsx'));
const Experience = lazy(() => import('./components/Experience.tsx'));
const Project = lazy(() => import('./components/Project.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));

export default function Home() {
  return (
    <ReactLenis root>
      <Navbar/>
      <main className='bg-black hide-scrollbar'>
        <div className="wrapper">
          <About/>
          <Expertise/>
          <Experience/>
          <Project/>
          <Contact/>
        </div>
      </main>
    </ReactLenis>
  );
}
