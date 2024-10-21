import React from 'react';
import Image from 'next/image';
import ProductServicesBG from '../public/images/product-services.webp';

interface Service {
  service: string;
  detail: string;
  button: string;
}

const services: Service[] = [
  {
    service: "Custom Karts",
    detail: "Fully-customizable karts to match your racing style. Choose from various models, personalize everything, and dominate the track.",
    button: "Design Your Kart Now!"
  },
  {
    service: "Kart Racing Experiences",
    detail: "Join our thrilling race tracks with power-ups and surprises! Perfect for beginners and pros alike.",
    button: "Book Your Race Experience!"
  },
  {
    service: "Kart Maintenance & Upgrades",
    detail: "Keep your kart in top shape with premium maintenance, or upgrade your kart with turbo boosts and custom engines.",
    button: "Upgrade Your Kart!"
  }  
];

const ServicesSection: React.FC = React.memo(() => {
  return (
    <section className="services py-16 bg-gray-100 relative">
      <div className="absolute inset-0">
        <Image
          src={ProductServicesBG}
          alt="Product and Services Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          placeholder="blur"
          priority
        />
      </div>
      <div className="flex flex-col mx-auto items-center justify-center relative z-10">
        <h2 className="text-3xl font-bold text-center mb-6 bg-[#D50032] w-fit py-2 px-10 rounded-full">Our Products & Services</h2>
        <div className="flex flex-col md:flex-row gap-5 px-5">
          {services.map(({ service, detail, button }) => (
            <div key={service} className="flex-col gap-2 bg-white p-6 rounded-lg shadow text-gray-900">
              <h3 className="text-xl font-bold">{service}</h3>
              <p className="mt-4">{detail}</p>
              <button className="mt-4 px-6 py-3 bg-red-500 rounded text-white font-semibold hover:bg-red-600 transition duration-300">{button}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ServicesSection;
