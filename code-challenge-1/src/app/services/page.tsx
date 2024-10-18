import TestimonialsSection from '../../components/testimonialsSection';
import ProductServicesBG from '../../public/images/product-services.jpg';
import BGHero from "../../public/images/black-hero.png";

interface Service {
  name: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    name: 'Custom Karts',
    description: 'Our custom karts are built to meet your racing style. Choose from various models, personalize everything, and dominate the track.',
    price: '$500 - $1,500'
  },
  {
    name: 'Kart Racing Experiences',
    description: 'Experience thrilling races on dynamic tracks, complete with power-ups and surprises, designed for all skill levels.',
    price: '$100 per race'
  },
  {
    name: 'Kart Maintenance & Upgrades',
    description: 'Keep your kart in top shape or upgrade it with performance enhancements such as turbo boosts and custom engines.',
    price: 'From $250'
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative hero bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BGHero.src})` }}>
        <div className="container mx-auto h-full flex justify-center items-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Our Products & Services</h1>
            <p className="mt-4 text-lg max-w-lg mx-auto">
              We provide top-of-the-line karts and racing experiences designed to thrill. Explore what we offer and get ready to race!
            </p>
          </div>
        </div>
      </section>

      <section className="services py-16 bg-gray-100" style={{ backgroundImage: `url(${ProductServicesBG.src})` }}>
        <div className="flex flex-col mx-auto items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-6 bg-[#D50032] w-fit py-2 px-10 rounded-full">Our Products & Services</h2>
          <div className="flex flex-col md:flex-row gap-5 px-5">
            {services.map((service, index) => (
              <div key={index} className="flex-col gap-2 bg-white p-6 rounded-lg shadow text-gray-900">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="mt-4">{service.description}</p>
                <p className="mt-4 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
}
