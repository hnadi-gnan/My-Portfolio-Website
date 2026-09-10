import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/content/copy.en";

export function WhatISolve() {
  const c = copy.whatISolve;

  return (
    <Section id="what-i-solve" eyebrow="Value" heading={c.heading} lead={c.lead} tone="surface">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {c.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 80}>
            <article className="h-full bg-surface p-7">
              <h3 className="font-display text-[1.15rem] text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
