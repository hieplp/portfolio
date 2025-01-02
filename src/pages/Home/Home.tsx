import { Element } from 'react-scroll';
import SnapSection from "./components/SnapSection.tsx";
import React, { Suspense, useEffect, useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen.ts";

const About = React.lazy(() => import('./components/About.tsx'));
const Expertise = React.lazy(() => import('./components/Expertise.tsx'));
const Experience = React.lazy(() => import('./components/Experience.tsx'));
const Project = React.lazy(() => import('./components/Project.tsx'));
const Contact = React.lazy(() => import('./components/Contact.tsx'));
const Loading = React.lazy(() => import('./components/Loading.tsx'));

export default function Home() {
  const sections = [
    { component: About, name: "about" },
    { component: Expertise, name: "expertise" },
    { component: Experience, name: "experience" },
    { component: Project, name: "project" },
    { component: Contact, name: "contact" }
  ];

  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    if (container) {
      container.addEventListener('wheel', (event) => {
        event.preventDefault();
        container.scrollBy({
          // @ts-ignore
          top: event.deltaY,
          behavior: 'smooth'
        });
      });
    }
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-container">
      {sections.map(({ component: Section, name }, index) => {
        const ref = useRef<HTMLDivElement>(null);
        const isVisible = useOnScreen(ref);

        return (
          <Element name={name} key={index}>
            <div ref={ref}>
              <SnapSection>
                {isVisible ? (
                  <Suspense fallback={<Loading/>}>
                    <Section/>
                  </Suspense>
                ) : (
                  <Loading/>
                )}
              </SnapSection>
            </div>
          </Element>
        );
      })}
    </div>
  );
}
