"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { copy } from "@/content/copy.en";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = site.nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-soft ${
        scrolled || open
          ? "border-b border-hairline bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name.short}
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-7 text-sm">
            {site.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`transition-colors hover:text-ink ${
                      isActive ? "text-ink" : "text-muted"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={site.cvPath}
                download=""
                className="rounded-full border border-ink/20 px-4 py-1.5 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-hairline bg-bg md:hidden">
          <nav className="container-content py-6" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base text-ink hover:bg-accent-wash"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.cvPath}
                  download=""
                  className="mt-2 block rounded-lg bg-ink px-3 py-3 text-center text-base text-white"
                  onClick={() => setOpen(false)}
                >
                  {copy.hero.secondaryCta.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
