import {ReactNode} from "react";
import classNames from "../../lib/classNames.ts";

export default function CaroBackground({children, className}: {
  children?: ReactNode,
  className?: string
}) {
  return (
    <div className={classNames("relative w-full h-full", className)}>
      <div
        className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      {children}
    </div>

  );
}
