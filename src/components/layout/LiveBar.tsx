/** Fixed bottom status strip. The lounge runs 24 hours, so tables are always live. */
export default function LiveBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-500/25 bg-ink/85 backdrop-blur-xl">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'linear-gradient(90deg, rgba(13,90,52,.2), transparent 40%, transparent 60%, rgba(155,27,47,.15))',
        }}
      />
      <div className="shell relative flex items-center gap-4 overflow-hidden whitespace-nowrap py-2.5 font-mono text-[0.64rem] tracking-wider2 text-bone/55 sm:gap-7">
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          <span className="text-gold-200">Tables running</span>
        </span>
        <span className="text-gold-500/40">/</span>
        <span className="hidden sm:inline">
          Cash from <span className="text-gold-200">100 / 200</span>
        </span>
        <span className="hidden text-gold-500/40 sm:inline">/</span>
        <span>
          Open <span className="text-gold-200">24 hours</span>
        </span>
        <span className="hidden text-gold-500/40 md:inline">/</span>
        <span className="hidden md:inline">Casino Marina &middot; Colombo</span>
      </div>
    </div>
  );
}
