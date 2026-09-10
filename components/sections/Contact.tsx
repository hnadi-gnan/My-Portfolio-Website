import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { copy } from "@/content/copy.en";

export function Contact() {
  const c = copy.contact;

  return (
    <section id="contact" className="bg-ink py-section text-white">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/70">
                Contact
              </p>
              <h2 className="mt-4 text-fluid-h2 text-white">{c.heading}</h2>
              <p className="mt-6 max-w-xl text-fluid-lead text-white/70">{c.body}</p>
              {site.showLocation ? (
                <p className="mt-6 text-sm text-white/70">
                  Based in {site.location} · {site.availability}
                </p>
              ) : (
                <p className="mt-6 text-sm text-white/70">{site.availability}</p>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center justify-between rounded-xl border border-white/15 px-5 py-4 transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.12em] text-white/65">
                    {c.emailLabel}
                  </span>
                  <span className="mt-1 block text-sm text-white">{site.email}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/65 transition-colors group-hover:text-white" />
              </a>

              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/15 px-5 py-4 transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.12em] text-white/65">
                    {c.whatsappLabel}
                  </span>
                  <span className="mt-1 block text-sm text-white">
                    {site.whatsapp.display}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/65 transition-colors group-hover:text-white" />
              </a>

              <a
                href={site.cvPath}
                download=""
                className="group flex items-center justify-between rounded-xl border border-white/15 px-5 py-4 transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.12em] text-white/65">
                    Résumé
                  </span>
                  <span className="mt-1 block text-sm text-white">Download CV (PDF)</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/65 transition-colors group-hover:text-white" />
              </a>

              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/15 px-5 py-4 transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  <span className="text-sm text-white">{s.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-white/65 transition-colors group-hover:text-white" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
