import React, { memo } from 'react';
import Image from 'next/image';
import Culture from '@/components/cultureSection';
import HistoryTimeline from '@/components/historyTimeline';
import BGHero from "../../public/images/black-hero.webp";
import TeamSection from '@/components/teamsSection';

const AboutUs: React.FC = () => {
  return (
    <div>
      <section className="relative hero h-screen">
        <Image
          src={BGHero}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
        />
        <div className="container mx-auto h-full flex justify-center items-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Mushroom Motorsports Company History</h1>
            <p className="mt-4 text-lg max-w-5xl mx-auto">
              Founded in the heart of the Mushroom Kingdom, Mushroom Motorsports began as a small workshop, assembling karts for local racers. Over the years, we’ve grown into a leading provider of custom racing karts, inspired by legendary racers such as Mario, Luigi, and Princess Peach. Our journey has been filled with innovation, community involvement, and a passion for adventure. From humble beginnings to racing championships, we continue to push the limits of kart design and performance.
            </p>
          </div>
        </div>
      </section>
      <HistoryTimeline />
      <TeamSection />
      <Culture />
    </div>
  );
};

export default memo(AboutUs);
