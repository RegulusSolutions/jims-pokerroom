export default function Marquee({ items }: { items: string[] }) {
  const suits = ['♠', '♥', '♦', '♣'] as const;
  const row = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden border-y border-gold-500/20 bg-carbon py-5">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'linear-gradient(90deg, rgba(13,90,52,.25), transparent 30%, transparent 70%, rgba(155,27,47,.2))',
        }}
      />
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="animate-marquee relative flex shrink-0 items-center gap-10 whitespace-nowrap pr-10"
          aria-hidden={copy === 1 ? true : undefined}
        >
          {row.map((item, i) => {
            const suit = suits[i % suits.length];
            const red = suit === '♥' || suit === '♦';
            return (
              <span key={`${copy}-${i}`} className="flex items-center gap-10">
                <span className="font-display text-[1.15rem] uppercase tracking-[0.14em] text-bone/80">
                  {item}
                </span>
                <span
                  className="font-display text-base"
                  style={{ color: red ? 'rgba(225,29,72,.75)' : 'rgba(201,162,39,.85)' }}
                >
                  {suit}
                </span>
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
