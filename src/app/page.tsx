import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import GamesStrip from '@/components/sections/GamesStrip';
import Structure from '@/components/sections/Structure';
import EventsPreview from '@/components/sections/EventsPreview';
import PackagesPreview from '@/components/sections/PackagesPreview';
import Location from '@/components/sections/Location';
import Marquee from '@/components/ui/Marquee';
import CasinoSpectacle from '@/components/ui/CasinoSpectacle';
import CasinoShowcase from '@/components/ui/CasinoShowcase';
import CtaBand from '@/components/ui/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee
        items={[
          "Texas Hold'em",
          'PLO5',
          'Roulette',
          'Baccarat',
          'Niu Niu',
          'Cash & tournaments',
          'Casino Marina',
          'Open 24 hours',
        ]}
      />
      <CasinoSpectacle />
      <CasinoShowcase />
      <About />
      <GamesStrip />
      <Structure />
      <EventsPreview />
      <PackagesPreview />
      <Location />
      <CtaBand />
    </>
  );
}
