import TeamSection from '@/components/teamsSection';
import BGHero from "../../public/images/black-hero.png";
import React from 'react';

const Team: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative hero bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BGHero.src})` }}>
        <div className="container mx-auto h-full flex justify-center items-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Meet the Team</h1>
            <p className="mt-4 text-lg max-w-lg mx-auto">
              Our talented team of racers, designers, and engineers is here to deliver the best racing experience.
            </p>
          </div>
        </div>
      </section>
      <TeamSection />
    </div>
  );
}

export default Team
