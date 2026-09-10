import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { copy } from "@/content/copy.en";

const facts = [
  { label: "Experience", value: "~5 years in ERP & business systems" },
  { label: "Platform", value: "Odoo 15 – 19, certified on 19 (score 90)" },
  { label: "Delivery", value: "12+ implementations, several led end to end" },
];

export function Hero() {
  const h = copy.hero;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* soft, single-tone background wash — no gradient theatrics */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-accent-wash/60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="container-content">
        <div className="grid gap-14 lg:grid-cols-[1.55fr_1fr] lg:items-end lg:gap-12">
          <div>
            <p className="eyebrow reveal is-visible">{h.eyebrow}</p>

            <h1 className="mt-6 text-fluid-display">{h.headline}</h1>

            <p className="mt-7 max-w-2xl text-fluid-lead text-muted">
              {h.subhead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={h.primaryCta.href} variant="primary">
                {h.primaryCta.label}
              </Button>
              <Button href={site.cvPath} variant="secondary" download>
                {h.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-8 flex items-center gap-2.5 text-sm text-muted">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent"
              />
              {h.note}
            </p>
          </div>

          <Reveal delay={150}>
            <dl className="divide-y divide-hairline border-t border-hairline">
              {facts.map((fact) => (
                <div key={fact.label} className="py-4">
                  <dt className="text-xs font-medium uppercase tracking-[0.12em] text-accent-strong">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-ink/90">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
