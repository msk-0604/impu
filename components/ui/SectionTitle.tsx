type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-3 md:space-y-4">
      {eyebrow ? <p className="text-xs tracking-[0.16em] text-[#7a5548]">{eyebrow}</p> : null}
      <h2 className="text-3xl leading-tight font-semibold text-[#3f2d28] md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-7 text-[#7a5548]">{description}</p> : null}
    </div>
  );
}
