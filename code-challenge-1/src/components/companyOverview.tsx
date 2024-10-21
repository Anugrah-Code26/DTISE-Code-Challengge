import Image from 'next/image';
import CompanyOverviewImg from '../public/images/company-overview.webp';
import React from 'react';

const CompanyOverview: React.FC = () => {
  return (
    <section className="company-overview">
      <div className='flex mx-auto'>
        <div className="flex-1 items-center justify-center bg-white py-16 hidden md:flex">
          <Image
            src={CompanyOverviewImg}
            alt="Company Overview"
            width={360}
            height={38}
          />
        </div>
        <div className="flex-1 bg-[#D50032] py-16 flex items-center">
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Mushroom Motorsports</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Founded in the heart of the Mushroom Kingdom, Mushroom Motorsports is the premier destination for kart racing enthusiasts. Inspired by legendary racers like Mario, Luigi, and Princess Peach, we create thrilling, state-of-the-art racing experiences for all skill levels.
            </p>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold">Our Team</h3>
              <p className="mt-4">Mario - Lead Engineer & Racer | Luigi - Track Designer | Toadette - Head of Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
