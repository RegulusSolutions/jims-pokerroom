'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { nav, site } from '@/lib/site';
import { cn } from '@/lib/utils';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-gold-500/15 bg-ink/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent'
        )}
      >
        <div className="shell flex items-center justify-between py-5">
          <Link href="/" className="group flex items-baseline gap-2" aria-label={site.name}>
            <span className="font-display text-[1.02rem] uppercase tracking-[0.16em] text-bone">
              Jim&rsquo;s
            </span>
            <span className="font-display text-[1.02rem] uppercase tracking-[0.16em] text-gold-500 transition-colors group-hover:text-gold-200">
              Poker Room
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative py-1 font-mono text-[0.68rem] uppercase tracking-wider2 transition-colors duration-300',
                    active ? 'text-gold-300' : 'text-bone/55 hover:text-gold-300'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px bg-gold-500 transition-all duration-500',
                      active ? 'w-full' : 'w-0'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.contact.phoneHref}
              className="hidden items-center gap-2 font-mono text-[0.68rem] tracking-wider2 text-bone/60 transition-colors hover:text-gold-300 md:flex"
            >
              <Phone size={13} strokeWidth={1.5} />
              {site.contact.phone}
            </a>
            <Link href="/bookings" className="btn btn-solid hidden px-6 py-3 sm:inline-flex">
              Reserve
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 text-gold-300 lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} strokeWidth={1.4} /> : <Menu size={22} strokeWidth={1.4} />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col justify-center bg-ink/98 backdrop-blur-2xl transition-all duration-500 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <nav className="shell flex flex-col gap-1" aria-label="Mobile">
          {[{ label: 'Home', href: '/' }, ...nav, { label: 'Reserve a seat', href: '/bookings' }].map(
            (item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
                className={cn(
                  'border-b border-gold-500/10 py-4 font-display text-3xl text-bone transition-all duration-500 hover:text-gold-300',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                )}
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href={site.contact.phoneHref}
            className="mt-8 font-mono text-sm tracking-wider2 text-gold-500"
          >
            {site.contact.phone}
          </a>
        </nav>
      </div>
    </>
  );
}
