import Image, { StaticImageData } from 'next/image';
import React from 'react';
import ProductServicesBG from '../public/images/product-services.jpg';
import Mario from "../public/images/mario.png";
import Luigi from "../public/images/luigi.png";
import Toadette from "../public/images/toadette.png";

interface Team {
    picture: StaticImageData,
    alt: string,
    name: string,
    position: string,
    experience: string
  }

const teams: Team[] = [
  {
    picture: Mario,
    alt: "Mario - Lead Engineer",
    name: "Mario",
    position: "Lead Engineer",
    experience: "Mario leads the team with years of racing experience. Known for his quick reflexes and engineering genius, he's the heart of Mushroom Motorsports."
  },
  {
    picture: Luigi,
    alt: "Luigi - Track Designer",
    name: "Luigi",
    position: "Track Designer",
    experience: "Luigi designs the most thrilling tracks, known for his attention to detail and love for challenging race courses."
  },
  {
    picture: Toadette,
    alt: "Toadette - Head of Design",
    name: "Toadette",
    position: "Head of Design",
    experience: "Toadette leads the design team, crafting karts that are not only fast but also a work of art. Her eye for aesthetics is unmatched."
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-12 flex flex-col mx-auto items-center justify-center text-gray-900" style={{ backgroundImage: `url(${ProductServicesBG.src})` }}>
        <h2 className="text-3xl font-bold text-center mb-6 bg-[#D50032] w-fit py-2 px-10 rounded-full text-white">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {teams.map((member, index) => (
            <div key={index} className="team-member text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <Image
                src={member.picture}
                alt={member.alt}
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
              <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
              <p className="text-sm font-light mt-2">{member.position}</p>
              <p className="mt-4">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>
    )
}

export default TeamSection;
