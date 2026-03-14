import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  titleClassName?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  titleClassName = "",
  children,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-secondary/10 text-brand-secondary mb-4">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-brand-dark leading-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-brand-dark/60 max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
