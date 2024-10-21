import React from 'react';
import Image from 'next/image';
import BackGround from '../public/images/culture-bg.webp';

const Culture: React.FC = React.memo(() => {
  return (
    <section className="py-12 text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={BackGround}
          alt="Background Culture Image"
          layout="fill"
          objectFit="cover"
          quality={75}
          placeholder="blur"
        />
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6">Our Culture & Values</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          At Mushroom Motorsports, we believe in pushing boundaries, both on the track and in our workplace. Our team is driven by innovation, creativity, and a shared love for adventure. We foster a collaborative environment where every voice is heard, and where new ideas are celebrated. From kart design to track development, our passion for racing fuels everything we do.
        </p>
        <p className="text-lg text-center max-w-3xl mx-auto mt-6">
          We value teamwork, dedication, and above all, having fun. Racing is not just a job for us; it is a way of life. Whether it&apos;s developing new kart technologies or planning the next big race, we approach every challenge with enthusiasm and a desire to excel.
        </p>
      </div>
    </section>
  );
});

export default Culture;
