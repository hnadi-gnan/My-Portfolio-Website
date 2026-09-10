import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { copy } from "@/content/copy.en";

export function About() {
  const c = copy.about;

  return (
    <section id="about" className="bg-bg py-section">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow mb-4">About</p>
              <h2 className="text-fluid-h2">
                Technology, business, and the space between them.
              </h2>
              <div className="mt-8 space-y-6 text-[1.05rem] leading-relaxed text-ink/90">
                {c.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              {site.showLocation ? (
                <p className="mt-8 text-sm text-muted">Based in {site.location}</p>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="mx-auto max-w-[16rem] sm:max-w-xs lg:mx-0 lg:max-w-none lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl border border-hairline bg-accent-wash">
                <Image
                  src="/headshot-placeholder.svg"
                  alt={c.headshotAlt}
                  width={600}
                  height={720}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-xs text-muted">
                {c.headshotCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
