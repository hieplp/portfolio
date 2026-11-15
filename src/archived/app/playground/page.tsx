import type { Metadata } from "next";
import Link from "next/link";
import PaletteLab from "@/archived/components/playground/palette-lab";
import TaskPlanner from "@/archived/components/playground/task-planner";
import SectionSpy from "@/archived/components/section-spy";
import SiteFooter from "@/archived/components/site-footer";
import SiteHeader from "@/archived/components/site-header";
import "../playground.css";

export const metadata: Metadata = {
  title: "Ly Phuoc Hiep | Playground",
  description:
    "A separate playground of interactive interface experiments: a task planner and a color palette explorer.",
};

export default function Playground() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="wrap" id="top">
        <SiteHeader variant="playground" />
        <main id="main" tabIndex={-1}>
          <header className="play-intro">
            <div>
              <p className="hero-kicker">Interface experiments / A space to play</p>
              <h1>Playground.</h1>
            </div>
            <p className="play-intro-description">
              Small experiments in interaction and visual design. Try them out,
              change a few things, and see what happens.
            </p>
          </header>
          <section
            className="experiment"
            id="commit"
            tabIndex={-1}
            aria-labelledby="commit-title"
          >
            <div className="experiment-surface">
              <div className="experiment-story">
                <p className="experiment-label">Commit / Task planner experiment</p>
                <h2 id="commit-title">
                  Less busywork.
                  <br />
                  More momentum.
                </h2>
                <p>
                  A focused little workspace for the things you actually want to get
                  done.
                </p>
                <div className="experiment-tags">
                  <span>JAVASCRIPT</span>
                  <span>LOCAL STATE</span>
                  <span>ACCESSIBILITY</span>
                </div>
              </div>
              <TaskPlanner />
            </div>
            <details className="experiment-details">
              <summary>
                About this experiment{" "}
                <span className="disclosure-symbol" aria-hidden="true" />
              </summary>
              <p>
                An illustrative interface concept exploring task creation,
                completion state, and keyboard interaction. Add a task with the
                button or Enter, check items off, or reset the demo. Tasks stay in
                memory and reset when you reload the page. This is an experiment, not
                a claim about past client work.
              </p>
            </details>
          </section>
          <section
            className="palette-section"
            id="palette"
            tabIndex={-1}
            aria-labelledby="palette-title"
          >
            <div className="palette-layout">
              <PaletteLab />
              <div className="palette-story">
                <p className="experiment-label">
                  Palette lab / Color explorer experiment
                </p>
                <h2 id="palette-title">
                  A small experiment.
                  <br />
                  A different perspective.
                </h2>
                <p>
                  Explore four considered color combinations, then take the ones you
                  like into your next project.
                </p>
                <details className="experiment-details">
                  <summary>
                    About this experiment{" "}
                    <span className="disclosure-symbol" aria-hidden="true" />
                  </summary>
                  <p>
                    A compact tool for exploring five-step color palettes. Cycle
                    through the combinations and copy their hexadecimal values. The
                    page’s interface keeps your chosen theme while the palette colors
                    change independently.
                  </p>
                </details>
              </div>
            </div>
          </section>
          <div className="play-return">
            <p>Looking for my experience and selected projects?</p>
            <Link className="button" href="/">
              Back to portfolio <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </main>
        <SiteFooter label="Playground" />
      </div>
      <SectionSpy />
    </>
  );
}
