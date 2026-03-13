interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="border-t border-foreground/10 pt-6 mb-8">
      <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
