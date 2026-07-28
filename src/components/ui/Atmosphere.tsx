import { cn } from '@/lib/utils';

/** Ambient casino colour wash — emerald felt, ruby, champagne gold. */
export default function Atmosphere({
  className,
  intensity = 'soft',
}: {
  className?: string;
  intensity?: 'soft' | 'rich' | 'edge';
}) {
  const maps = {
    soft:
      'radial-gradient(ellipse 55% 70% at 12% 20%, rgba(13,90,52,.22), transparent 58%), radial-gradient(ellipse 45% 60% at 88% 15%, rgba(155,27,47,.16), transparent 52%), radial-gradient(ellipse 50% 55% at 50% 100%, rgba(201,162,39,.12), transparent 60%)',
    rich:
      'radial-gradient(ellipse 60% 80% at 15% 30%, rgba(13,90,52,.38), transparent 60%), radial-gradient(ellipse 50% 70% at 90% 20%, rgba(155,27,47,.28), transparent 55%), radial-gradient(ellipse 55% 50% at 50% 90%, rgba(201,162,39,.2), transparent 55%)',
    edge:
      'radial-gradient(ellipse 70% 90% at 50% 0%, rgba(201,162,39,.18), transparent 55%), radial-gradient(ellipse 40% 60% at 0% 50%, rgba(13,90,52,.2), transparent 50%), radial-gradient(ellipse 40% 60% at 100% 60%, rgba(155,27,47,.16), transparent 50%)',
  };

  return (
    <div
      className={cn('pointer-events-none absolute inset-0', className)}
      style={{ background: maps[intensity] }}
      aria-hidden="true"
    />
  );
}
