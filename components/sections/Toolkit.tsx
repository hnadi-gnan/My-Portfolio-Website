import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { copy } from "@/content/copy.en";
import { toolkit } from "@/content/experience.en";

export function Toolkit() {
  const c = copy.toolkit;

  return (
    <Section id="toolkit" eyebrow="Stack" heading={c.heading} lead={c.lead}>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 70}>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-accent-strong">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
