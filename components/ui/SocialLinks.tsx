import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

type Variant = "row" | "stack";

/**
 * Renders every contact channel: email + WhatsApp always, plus anything added to
 * `site.socials` (LinkedIn, GitHub, …). Adding a social link needs no code change.
 */
export function SocialLinks({ variant = "row" }: { variant?: Variant }) {
  const wrap =
    variant === "row"
      ? "flex flex-wrap items-center gap-x-6 gap-y-3"
      : "flex flex-col gap-3";

  return (
    <div className={wrap}>
      <a
        href={`mailto:${site.email}`}
        className="group inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent-strong"
      >
        <Mail className="h-4 w-4" aria-hidden />
        <span>{site.email}</span>
      </a>

      <a
        href={site.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent-strong"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        <span>WhatsApp {site.whatsapp.display}</span>
      </a>

      {site.socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-accent-strong"
        >
          <span>{s.label}</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      ))}
    </div>
  );
}
