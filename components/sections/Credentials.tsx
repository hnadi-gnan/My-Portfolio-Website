import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/content/copy.en";
import { certifications, education, languages } from "@/content/experience.en";

export function Credentials() {
  const c = copy.credentials;

  return (
    <Section
      id="credentials"
      eyebrow="Credentials"
      heading={c.heading}
      tone="surface"
    >
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        <Reveal>
          <div>
            <h3 className="border-b border-ink/15 pb-3 font-display text-[1.05rem]">
              {c.certificationsLabel}
            </h3>
            <ul className="mt-4 space-y-5">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="text-sm font-medium text-ink">{cert.name}</p>
                  <p className="mt-1 text-sm text-muted">{cert.detail}</p>
                  <p className="mt-0.5 text-xs text-muted">
                    {cert.issuer} · {cert.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <h3 className="border-b border-ink/15 pb-3 font-display text-[1.05rem]">
              {c.educationLabel}
            </h3>
            <ul className="mt-4 space-y-5">
              {education.map((ed) => (
                <li key={ed.school}>
                  <p className="text-sm font-medium text-ink">
                    {ed.degree}
                    {ed.field ? `, ${ed.field}` : ""}
                  </p>
                  <p className="mt-1 text-sm text-muted">{ed.school}</p>
                  <p className="mt-0.5 text-xs text-muted">{ed.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div>
            <h3 className="border-b border-ink/15 pb-3 font-display text-[1.05rem]">
              {c.languagesLabel}
            </h3>
            <ul className="mt-4 space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 text-sm"
                >
                  <span className="text-ink">{lang.name}</span>
                  <span className="text-right text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
