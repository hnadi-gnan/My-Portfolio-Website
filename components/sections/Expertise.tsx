import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/content/copy.en";

export function Expertise() {
  const c = copy.expertise;

  return (
    <Section id="expertise" eyebrow="Domains" heading={c.heading} lead={c.lead}>
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {c.groups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 80}>
            <div>
              <h3 className="border-b border-ink/15 pb-3 font-display text-[1.1rem] text-ink">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-snug text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
