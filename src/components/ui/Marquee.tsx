export default function Marquee({ items }: { items: string[] }) {
  const suits = ['♠', '♥', '♦', '♣'] as const;
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-gold-500/25 bg-[#08080a]">
      {/* Twin gold rails like a table bumper */}
      <div className="gold-rail h-px w-full opacity-80" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(13,90,52,.35), transparent 25%, transparent 75%, rgba(155,27,47,.28)), repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(201,162,39,.04) 48px, rgba(201,162,39,.04) 49px)',
        }}
      />

      <div className="relative flex overflow-hidden py-6">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="animate-marquee relative flex shrink-0 items-center gap-12 whitespace-nowrap pr-12"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {row.map((item, i) => {
              const suit = suits[i % suits.length];
              const red = suit === '♥' || suit === '♦';
              return (
                <span key={`${copy}-${i}`} className="flex items-center gap-12">
                  <span className="font-display text-[1.25rem] uppercase tracking-[0.18em] text-gold-100/90 sm:text-[1.35rem]">
                    {item}
                  </span>
                  <span
                    className="relative flex h-8 w-8 items-center justify-center rounded-full border border-current/40 font-display text-sm"
                    style={{
                      color: red ? 'rgba(225,29,72,.9)' : 'rgba(201,162,39,.95)',
                      boxShadow: `inset 0 0 0 2px ${red ? 'rgba(225,29,72,.35)' : 'rgba(201,162,39,.35)'}`,
                    }}
                    aria-hidden="true"
                  >
                    {suit}
                  </span>
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <div className="gold-rail h-px w-full opacity-80" />
    </div>
  );
}
