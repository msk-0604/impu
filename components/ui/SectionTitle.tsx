type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-3 md:space-y-4">
      {eyebrow ? <p className="text-[11px] tracking-[0.2em] text-[#7a5548] uppercase">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl leading-tight text-[#3f2d28] md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-[#7a5548] md:text-base">{description}</p> : null}
    </div>
  );
}
