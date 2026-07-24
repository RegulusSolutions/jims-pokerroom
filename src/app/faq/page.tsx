import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Accordion from '@/components/ui/Accordion';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import { faqs } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ',
  description: "Common questions about playing at Jim's Poker Room — booking, stakes, dress code, age limits and packages.",
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        label="FAQ"
        lines={['Before you', { text: 'sit down.', gold: true }]}
        body="Everything people ask on the phone, answered here so you do not have to."
      />

      <section className="pb-28">
        <div className="shell grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="surface bracket sticky top-28 p-9">
              <p className="label">Still stuck</p>
              <h2 className="h-display mt-5 text-[1.7rem]">Ask a host.</h2>
              <p className="lede mt-4 text-[0.9rem]">
                Someone answers the phone every night the room is open.
              </p>
              <div className="mt-8 space-y-3 font-mono text-[0.74rem]">
                <a href={site.contact.phoneHref} className="block text-gold-300 transition-colors hover:text-gold-100">
                  {site.contact.phone}
                </a>
                <a href={`mailto:${site.contact.email}`} className="block text-bone/55 transition-colors hover:text-gold-200">
                  {site.contact.email}
                </a>
              </div>
              <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-solid mt-9 w-full">
                Message on WhatsApp
              </a>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
