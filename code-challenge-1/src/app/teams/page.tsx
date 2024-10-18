import TeamSection from '@/components/teamsSection';
import BGHero from "../../public/images/black-hero.png";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mario',
    title: 'Lead Engineer & Racer',
    bio: 'Mario is the mastermind behind Mushroom Motorsports’ kart designs. With years of racing experience and engineering expertise, he builds the fastest and most reliable karts on the track.',
    imageUrl: '/images/mario.jpg',
    email: 'mario@mushroommotorsports.com'
  },
  {
    name: 'Luigi',
    title: 'Track Designer',
    bio: 'Luigi is a brilliant track designer who creates innovative race courses filled with surprises. He combines creativity with safety to ensure a thrilling experience for racers.',
    imageUrl: '/images/luigi.jpg',
    email: 'luigi@mushroommotorsports.com'
  },
  {
    name: 'Toadette',
    title: 'Head of Design',
    bio: 'Toadette oversees the design of all karts and accessories. Her attention to detail ensures that each kart not only performs well but looks fantastic on the track.',
    imageUrl: '/images/toadette.jpg',
    email: 'toadette@mushroommotorsports.com'
  }
];

export default function Team() {
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
