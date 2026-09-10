import { ArrowUp } from "lucide-react";
import { site } from "@/content/site";
import { copy } from "@/content/copy.en";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="container-content flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base text-ink">{site.name.short}</p>
          <p className="mt-1 text-sm text-muted">{copy.footer.tagline}</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <span>
            © {year} {site.name.short}
          </span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
