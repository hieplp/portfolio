import { facts, image, paragraphs } from "@/content/about";
import Image from "next/image";
import SectionHeading from "./section-heading";

export default function AboutSection() {
  return (
    <section
      className="portfolio-section page-gutter"
      id="about"
      tabIndex={-1}
      aria-labelledby="about-title"
    >
      <SectionHeading />
      <div className="about-layout">
        <div className="about-copy">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="about-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="about-figure">
          <Image
            src={image.src}
            alt={image.alt}
            width={700}
            height={1050}
            sizes="320px"
            quality={60}
          />
          <figcaption>{image.credit}</figcaption>
        </figure>
      </div>
    </section>
  );
}