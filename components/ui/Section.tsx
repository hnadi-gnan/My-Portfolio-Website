import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  heading: string;
  lead?: string;
  children: ReactNode;
  /** Alternate background for rhythm between sections. */
  tone?: "base" | "surface";
  className?: string;
};

export function Section({
  id,
  eyebrow,
  heading,
  lead,
  children,
  tone = "base",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${tone === "surface" ? "bg-surface" : "bg-bg"} py-section ${className}`}
    >
      <div className="container-content">
        <Reveal>
          <div className="max-w-prose">
            {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
            <h2 className="text-fluid-h2">{heading}</h2>
            {lead ? (
              <p className="mt-5 text-fluid-lead text-muted">{lead}</p>
            ) : null}
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
