import { AnimatedLink } from "@/components/links/animated-link";

export function IntroductionHero() {
  return (
    <div className="py-16 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Ly Phuoc Hiep</h1>
        <p className="text-xl">Software Engineer</p>
      </div>

      <div className="space-y-1">
        <p className="">
          Hi! I&apos;m a full-stack developer who brings ideas to life using{" "}
          {highlightText("Java Spring")} for robust backends and{" "}
          {highlightText("React")} for smooth user experiences. From database to
          deployment, I build complete solutions that make an impact.
        </p>
      </div>

      <div className="flex gap-3">
        <AnimatedLink text="Github" link="https://github.com/lyphuochiep" />
        <AnimatedLink
          text="LinkedIn"
          link="https://www.linkedin.com/in/lyphuochiep"
        />
      </div>
    </div>
  );
}

const highlightText = (text: string) => {
  return <span className="font-bold">{text}</span>;
};
