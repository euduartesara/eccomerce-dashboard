type CardProps = {
  title: string;
  description: string;
};

export function Card({ title, description }: CardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <h3 className="text-sm font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </article>
  );
}
