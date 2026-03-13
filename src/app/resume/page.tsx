import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/layouts/page-container";
import { ResumeHeader } from "./_components/resume-header";
import { ResumeSummary } from "./_components/resume-summary";
import { ResumeSkills } from "./_components/resume-skills";
import { ResumeExperience } from "./_components/resume-experience";
import { ResumeEducation } from "./_components/resume-education";
import { ResumeAwards } from "./_components/resume-awards";

export default function ResumePage() {
  return (
    <PageContainer>
      {/* Top bar */}
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to home
        </Link>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 border border-border px-5 py-2 rounded-full text-sm font-medium hover:bg-accent transition-colors"
        >
          <Download className="w-4 h-4" strokeWidth={1.5} />
          Download PDF
        </a>
      </div>

      <ResumeHeader />
      <ResumeSummary />
      <ResumeSkills />
      <ResumeExperience />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ResumeEducation />
        <ResumeAwards />
      </div>
    </PageContainer>
  );
}
