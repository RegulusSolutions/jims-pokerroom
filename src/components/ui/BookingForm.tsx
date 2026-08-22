'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

const field =
  'w-full border-b border-gold-500/25 bg-transparent px-0 py-3.5 font-sans text-[0.95rem] text-bone placeholder:text-ash/60 transition-colors focus:border-gold-500 focus:outline-none';
const labelCls = 'label mb-2 block';

/** Client-side only. Point handleSubmit at /api/bookings, a WhatsApp deep
 *  link, or your CRM — nothing here posts anywhere yet. */
export default function BookingForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', date: '', people: '2', game: "Texas Hold'em", notes: '',
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplest live option: hand the request to WhatsApp.
    const text = encodeURIComponent(
      `Seat request — ${form.name}\nDate: ${form.date}\nPlayers: ${form.people}\nGame: ${form.game}\nPhone: ${form.phone}\n${form.notes}`
    );
    window.open(`${site.contact.whatsapp}?text=${text}`, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="surface bracket flex flex-col items-center px-8 py-20 text-center">
        <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-gold-500 text-gold-400">
          <Check size={24} strokeWidth={1.4} />
        </span>
        <h3 className="h-display text-3xl">Request sent</h3>
        <p className="lede mt-4 max-w-sm">
          A host will confirm your seat by phone. If you&rsquo;d rather not wait, call{' '}
          <a href={site.contact.phoneHref} className="text-gold-400 underline underline-offset-4">
            {site.contact.phone}
          </a>
          .
        </p>
        <button onClick={() => setSent(false)} className="btn mt-9">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface bracket space-y-9 p-8 sm:p-11">
      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">Your name</label>
          <input id="name" required value={form.name} onChange={set('name')} className={field} placeholder="As it appears on your ID" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone</label>
          <input id="phone" required type="tel" value={form.phone} onChange={set('phone')} className={field} placeholder="+94 7X XXX XXXX" />
        </div>
        <div>
          <label className={labelCls} htmlFor="date">Which night</label>
          <input id="date" required type="date" value={form.date} onChange={set('date')} className={cn(field, '[color-scheme:dark]')} />
        </div>
        <div>
          <label className={labelCls} htmlFor="people">How many seats</label>
          <select id="people" value={form.people} onChange={set('people')} className={cn(field, 'appearance-none')}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((n) => (
              <option key={n} value={n} className="bg-onyx">{n}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="game">Game</label>
          <select id="game" value={form.game} onChange={set('game')} className={cn(field, 'appearance-none')}>
            {["Texas Hold'em cash", 'PLO5 cash', 'Roulette', 'Baccarat', 'Blackjack', 'Andar Bahar', 'Niu Niu', 'Tournament entry', 'Private table', 'Not sure yet'].map((g) => (
              <option key={g} value={g} className="bg-onyx">{g}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="notes">Anything we should know</label>
          <textarea id="notes" rows={3} value={form.notes} onChange={set('notes')} className={cn(field, 'resize-none')} placeholder="Stake preference, arrival time, hotel or transfer needs" />
        </div>
      </div>

      <p className="font-mono text-[0.64rem] leading-relaxed tracking-wide text-ash">
        Strictly 18+. Bring photo ID — it is checked at the Casino Marina entrance.
      </p>

      <button type="submit" className="btn btn-solid w-full sm:w-auto">
        Send seat request
      </button>
    </form>
  );
}
