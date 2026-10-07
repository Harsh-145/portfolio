export function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          {number} / {title}
        </p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
