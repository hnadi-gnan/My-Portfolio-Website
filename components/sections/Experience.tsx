import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/content/copy.en";
import { roles } from "@/content/experience.en";

export function Experience() {
  const c = copy.experience;

  return (
    <Section id="experience" eyebrow="Track record" heading={c.heading} lead={c.lead}>
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline sm:left-[9px]"
        />
        <ol className="space-y-12">
          {roles.map((role, i) => (
            <Reveal key={`${role.title}-${i}`}>
              <li className="relative pl-8 sm:pl-12">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg sm:left-[3px]"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-fluid-h3">{role.title}</h3>
                  <span className="text-sm text-muted">{role.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent-strong">
                  {role.org}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {role.summary}
                </p>
                {role.highlights ? (
                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm text-muted">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
