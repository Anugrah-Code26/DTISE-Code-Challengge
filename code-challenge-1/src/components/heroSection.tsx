import React from 'react';
import Image from 'next/image';
import BGHero from '../public/images/bg-hero.webp';
import styles from '../app/styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className="relative hero bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BGHero.src})` }}>
      <div className={`absolute inset-0 ${styles.heroOverlay}`} />
      <div className="container mx-auto h-full flex justify-center items-center relative z-10">
        <div className="text-center text-white">
          <h1 className={`text-5xl font-bold ${styles.textShadow}`}>Race Beyond Limits with Mushroom Motorsports!</h1>
          <p className={`mt-4 text-lg max-w-lg mx-auto  ${styles.textShadow}`}>
            Driving innovation and adventure, one custom kart at a time. Experience the thrill of world-class kart racing with precision engineering and cutting-edge design.
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-500 rounded text-black font-semibold hover:bg-yellow-600 transition duration-300">
            Explore Our Karts
          </button>
          <button className="mt-4 px-6 py-3 bg-red-500 rounded text-white font-semibold hover:bg-red-600 transition duration-300 ml-4">
            Join a Race Today!
          </button>
        </div>
      </div>
    </section>
  );
};

const MemoizedHeroSection = React.memo(HeroSection);
MemoizedHeroSection.displayName = "HeroSection";

export default MemoizedHeroSection;
