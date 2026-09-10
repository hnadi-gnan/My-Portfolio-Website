import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/content/copy.en";

export function WhatIDo() {
  const c = copy.whatIDo;

  return (
    <section id="what-i-do" className="border-y border-hairline bg-surface py-section">
      <div className="container-content">
        <Reveal>
          <div className="max-w-prose">
            <h2 className="text-fluid-h2">{c.heading}</h2>
            <p className="mt-5 text-fluid-lead text-muted">{c.lead}</p>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {c.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <li className="border-t border-ink/15 pt-5">
                <span className="font-display text-sm text-accent-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-fluid-h3">{item.title}</h3>
                <p className="mt-3 text-muted">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
