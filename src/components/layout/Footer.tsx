import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Atmosphere from '@/components/ui/Atmosphere';
import { site, footerNav } from '@/lib/site';
import { images } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-500/20 bg-carbon pb-24 pt-24">
      <Atmosphere intensity="rich" className="opacity-50" />
      <div className="shell relative">
        <div className="mb-14 flex items-center justify-center gap-8 font-display text-xl text-gold-500/35 sm:gap-12 sm:text-2xl" aria-hidden="true">
          <span>♠</span>
          <span className="text-[var(--ruby-bright)]/40">♥</span>
          <span className="text-[var(--ruby-bright)]/40">♦</span>
          <span>♣</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Image
              src={images.logo}
              alt={site.name}
              width={1253}
              height={688}
              className="h-12 w-auto"
            />
            <p className="lede mt-5 max-w-xs text-[0.92rem]">
              {site.tagline}, 30 Marine Drive, Colombo.
            </p>

            <div className="mt-8 space-y-3 font-mono text-[0.7rem] tracking-wide text-bone/55">
              <a href={site.contact.phoneHref} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Phone size={13} strokeWidth={1.4} className="text-gold-500" />
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Mail size={13} strokeWidth={1.4} className="text-gold-500" />
                {site.contact.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin size={13} strokeWidth={1.4} className="mt-1 shrink-0 text-gold-500" />
                <span>
                  {site.address.venue}
                  <br />
                  {site.address.building}, {site.address.street}
                  <br />
                  {site.address.city}, {site.address.country}
                </span>
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              {[
                { Icon: Facebook, href: site.social.facebook, label: 'Facebook' },
                { Icon: Instagram, href: site.social.instagram, label: 'Instagram' },
                { Icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-gold-500/30 text-gold-500 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-ink"
                >
                  <Icon size={15} strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <p className="label mb-6">{heading}</p>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[0.88rem] text-bone/55 transition-colors duration-300 hover:text-gold-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline my-14" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label mb-4">Hours</p>
            <ul className="space-y-1.5 font-mono text-[0.7rem] text-bone/55">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-gold-200/70">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="label mb-4">Play responsibly</p>
            <p className="text-[0.82rem] leading-relaxed text-bone/45">
              Strictly 18+. Gambling should be entertainment, never income. Set a limit before
              you sit down and walk away when you reach it.{' '}
              <Link href="/responsible-gaming" className="text-gold-400 underline underline-offset-4">
                Read our responsible gaming policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-start justify-start lg:justify-end">
            <span className="border border-gold-500/50 bg-ink/40 px-3 py-1.5 font-mono text-[0.7rem] tracking-wider2 text-gold-300">
              18+
            </span>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-gold-500/15 pt-8 font-mono text-[0.64rem] tracking-wide text-ash sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-gold-400">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold-400">
              Terms
            </Link>
            <Link href="/responsible-gaming" className="transition-colors hover:text-gold-400">
              18+
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
