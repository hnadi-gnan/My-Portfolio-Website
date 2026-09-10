import type { ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hairline bg-bg px-3 py-1 text-[0.8rem] leading-none text-muted">
      {children}
    </span>
  );
}
