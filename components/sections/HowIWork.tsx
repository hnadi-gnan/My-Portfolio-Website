import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/content/copy.en";

export function HowIWork() {
  const c = copy.howIWork;

  return (
    <Section id="how-i-work" eyebrow="Method" heading={c.heading} lead={c.lead} tone="surface">
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-5">
        {c.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 70}>
            <li className="flex h-full flex-col bg-surface p-6">
              <span className="font-display text-2xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[1.05rem] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
