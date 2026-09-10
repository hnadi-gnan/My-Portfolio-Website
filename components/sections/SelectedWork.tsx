import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { copy } from "@/content/copy.en";
import { caseStudies, alsoDelivered } from "@/content/projects.en";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-[0.12em] text-accent-strong">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-ink/90">{children}</dd>
    </div>
  );
}

export function SelectedWork() {
  const c = copy.work;

  return (
    <Section id="work" eyebrow="Portfolio" heading={c.heading} lead={c.lead} tone="surface">
      <div className="divide-y divide-hairline">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.id}>
            <article className="grid gap-6 py-10 first:pt-0 lg:grid-cols-[0.9fr_1.6fr] lg:gap-12">
              <div>
                <span className="font-display text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-fluid-h3">{cs.title}</h3>
                <p className="mt-2 text-sm text-muted">{cs.meta}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.technologies.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>

              <dl className="grid gap-5 sm:grid-cols-2">
                <Field label="Challenge">{cs.challenge}</Field>
                <Field label="Solution">{cs.solution}</Field>
                <Field label="My role">{cs.role}</Field>
                <Field label="Business impact">{cs.impact}</Field>
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 rounded-2xl border border-hairline bg-bg p-8">
          <h3 className="font-display text-[1.15rem] text-ink">{c.alsoHeading}</h3>
          <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {alsoDelivered.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-muted">
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
    </Section>
  );
}
