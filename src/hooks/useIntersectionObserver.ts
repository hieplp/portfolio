import { useEffect, useState } from "react";

export default function useIntersectionObserver(targets: string[]) {
  const [ activeSection, setActiveSection ] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = targets.find(t => t === entry.target.id);
            if (target) {
              setActiveSection(target);
            }
          } else if (entry.boundingClientRect.top < 190) {
            const previous = entry.target.previousElementSibling;
            if (previous) {
              const target = targets.find(t => t === previous.id);
              if (target) {
                setActiveSection(target);
              }
            }
          }
        });
      },
      { threshold: 0.9 } // Lower threshold to ensure the first section is detected
    );

    targets.forEach((target) => {
      const element = document.getElementById(target);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      targets.forEach((target) => {
        const element = document.getElementById(target);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ targets ]);

  return activeSection;
}
