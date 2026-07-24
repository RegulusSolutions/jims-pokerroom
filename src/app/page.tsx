import SceneMount from '@/components/three/SceneMount';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import GamesStrip from '@/components/sections/GamesStrip';
import Structure from '@/components/sections/Structure';
import EventsPreview from '@/components/sections/EventsPreview';
import PackagesPreview from '@/components/sections/PackagesPreview';
import Location from '@/components/sections/Location';
import Marquee from '@/components/ui/Marquee';
import CtaBand from '@/components/ui/CtaBand';

export default function HomePage() {
  return (
    <>
      {/* The 3D table sits behind the whole page. Scroll deals the flop:
          A♠ K♠ in the hole, J♠ Q♠ 10♠ on the board — a royal flush by the
          time you reach the booking CTA. */}
      <SceneMount />

      <div className="relative z-10">
        <Hero />

        <div className="bg-ink/80 backdrop-blur-[2px]">
          <Marquee
            items={[
              "Texas Hold'em",
              'Omaha Hi',
              'Omaha Hi/Lo',
              'Cash & tournaments',
              'Lotus Tower AC6',
              'Open 6pm',
            ]}
          />
          <About />
          <GamesStrip />
          <Structure />
          <EventsPreview />
          <PackagesPreview />
          <Location />
          <CtaBand />
        </div>
      </div>
    </>
  );
}
