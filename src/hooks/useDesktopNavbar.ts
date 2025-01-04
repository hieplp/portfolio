import {useNavbarStore} from "../stores/navbar.store.ts";
import useIntersectionObserver from "./useIntersectionObserver.ts";
import {useEffect} from "react";
import {useLenis} from "lenis/react";

export default function useDesktopNavbar() {

  const {
    items,
    setItems,
    current,
    setCurrent,
  } = useNavbarStore();

  const activeSection = useIntersectionObserver(items.map(item => item.id));

  const lenis = useLenis();

  useEffect(() => {
    const currentSection = items.filter(item => item.id === activeSection)[0];
    if (currentSection) {
      setCurrent(currentSection);
    }
  }, [activeSection]);

  const scrollTo = (to: string) => {

    // Calculate the offset based on from and to
    const fromIndex = current.index - 1;
    const toIndex = items.filter(item => item.id === to)[0].index - 1;

    // Do nothing if the from and to are the same
    if (fromIndex === toIndex) {
      return;
    }

    // Scroll down
    if (fromIndex < toIndex) {
      lenis?.scrollTo(`#${to}`, {
        duration: 2
      });
      return;
    }

    // Scroll up
    const offset = (toIndex - fromIndex) * window.innerHeight;
    lenis?.scrollTo(`#${to}`, {
      offset: offset,
      duration: 2
    });
  }

  return {
    items,
    setItems,
    current,
    setCurrent,
    scrollTo
  }
}
