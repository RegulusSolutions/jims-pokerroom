export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-gold-500/15 bg-carbon/60 py-5">
      <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-[1.15rem] uppercase tracking-[0.14em] text-bone/70">
              {item}
            </span>
            <span className="text-gold-500">&#9670;</span>
          </span>
        ))}
      </div>
      <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10" aria-hidden="true">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-[1.15rem] uppercase tracking-[0.14em] text-bone/70">
              {item}
            </span>
            <span className="text-gold-500">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
