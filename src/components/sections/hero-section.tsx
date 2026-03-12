"use client";

import {ArrowRight} from "lucide-react";
import {profile} from "@/data/profile";
import {Fragment} from "react";
import {LazyMotion, domAnimation, m} from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-row items-center max-w-6xl w-full mx-auto justify-center gap-12 min-h-screen md:h-screen py-16 md:py-0"
    >
      {/* Left: Text content */}
      <LazyMotion features={domAnimation}>
      <m.div
        className="flex flex-col flex-1"
        initial={{opacity: 0, x: -24}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5, ease: "easeOut"}}
      >
        {/* Tags */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {profile.tags.map((tag, i) => (
            <Fragment key={tag}>
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                {tag}
              </span>
              {i < profile.tags.length - 1 && (
                <span className="text-primary font-bold">·</span>
              )}
            </Fragment>
          ))}
        </div>

        {/* Greeting */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-4xl">
          Hi, I&apos;m <span className="text-primary">{profile.name}</span>!
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-6 max-w-4xl">
          {profile.title}
        </h2>

        {/* Bio */}
        <p className="text-base md:text-lg text-muted-foreground max-w-6xl leading-relaxed mb-10">
          {profile.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-row gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity group"
          >
            View my work
            <span className="transition-transform duration-150 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" strokeWidth={2}/>
            </span>
          </a>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors"
          >
            View Resume
          </Link>
        </div>
      </m.div>
      </LazyMotion>

    </section>
  );
}
