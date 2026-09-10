import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ease-soft focus-visible:outline-2";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-ink text-white hover:bg-accent-strong",
  secondary:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  ghost: "text-ink hover:text-accent-strong underline-offset-4 hover:underline",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: "" } : {})}
    >
      {children}
    </a>
  );
}
