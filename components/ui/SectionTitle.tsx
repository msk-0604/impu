type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? <p className="text-xs tracking-[0.22em] text-[#7f6550]">{eyebrow}</p> : null}
      <h2 className="text-2xl leading-tight font-semibold text-[#2f241d] md:text-3xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-[#58473a] md:text-base">{description}</p> : null}
    </div>
  );
}
