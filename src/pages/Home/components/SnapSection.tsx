import React from "react";

interface SnapSectionProps {
  children: React.ReactNode;
}

export default function SnapSection(props: SnapSectionProps) {
  const { children } = props;
  return (
    <section className="h-screen snap-start flex items-center justify-center">
      {children}
    </section>
  )
}
