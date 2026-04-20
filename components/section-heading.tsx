import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-5 font-display text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
      <div
        className={cn(
          "chrome-line mt-8 h-px w-28",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}
