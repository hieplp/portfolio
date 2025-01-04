import {ReactNode, Suspense, useRef} from "react";
import {useOnScreen} from "../../../hooks/useOnScreen.ts";
import Loading from "./Loading.tsx";

interface SnapSectionProps {
  children?: ReactNode;
}

export default function SnapSection(props: SnapSectionProps) {
  const {children} = props;
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  return (
    <div ref={ref}>
      <section className="h-screen snap-start flex items-center justify-center">
        {isVisible ? (
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        ) : (
          <Loading/>
        )}
      </section>
    </div>
  )
}
