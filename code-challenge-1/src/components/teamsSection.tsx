"use client";

import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState, memo } from 'react';
import ProductServicesBG from '../public/images/product-services.webp';
import Mario from "../public/images/mario.webp";
import Luigi from "../public/images/luigi.webp";
import Toadette from "../public/images/toadette.webp";
import Mii1 from "../public/images/mii1.webp";
import Mii2 from "../public/images/mii2.webp";
import Mii3 from "../public/images/mii3.webp";

interface Team {
  picture: StaticImageData | string;
  alt: string;
  name: string;
  position: string;
  experience: string;
}

interface NewTeam {
  picture: StaticImageData | string;
  position: string;
  experience: string;
}

const initialTeams: Team[] = [
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

const additionalTeams: NewTeam[] = [
  {
    picture: Mii1,
    position: "Staff Engineer",
    experience: "One of the latest additions to Mushroom Motorsports engineering team."
  },
  {
    picture: Mii2,
    position: "Staff Engineer",
    experience: "One of the latest additions to Mushroom Motorsports engineering team."
  },
  {
    picture: Mii3,
    position: "Staff Designer",
    experience: "One of the latest additions to Mushroom Motorsports design team."
  }
];

const TeamMember: React.FC<Team> = memo(({ picture, alt, name, position, experience }) => (
  <div className="team-member text-center p-6 bg-gray-100 rounded-lg shadow-md">
    <Image
      src={typeof picture === "string" ? picture : picture.src}
      alt={alt}
      width={100}
      height={100}
      className="rounded-full mx-auto"
      loading="lazy"
    />
    <h3 className="text-2xl font-semibold mt-4">{name}</h3>
    <p className="text-sm font-light mt-2">{position}</p>
    <p className="mt-4">{experience}</p>
  </div>
));

const TeamSection: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>(initialTeams);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=4');
        const data = await response.json();
        const randomUsers = data.results;

        const newMembers = additionalTeams.map((member, index) => {
          const randomUser = randomUsers[index];
          if (randomUser) {
            return {
              picture: member.picture,
              alt: `${randomUser.name.first} ${randomUser.name.last} - ${member.position}`,
              name: `${randomUser.name.first} ${randomUser.name.last}`,
              position: member.position,
              experience: member.experience
            };
          }
          return null;
        }).filter(Boolean) as Team[];

        setTeams((prevTeams) => {
          const combinedTeams = [...prevTeams, ...newMembers];
          return combinedTeams.slice(0, 6);
        });
      } catch (error) {
        console.error("Error fetching random users:", error);
      }
    };

    fetchRandomUsers();
  }, []);

  return (
    <section className="py-12 flex flex-col mx-auto items-center justify-center text-gray-900" style={{ backgroundImage: `url(${ProductServicesBG.src})` }}>
      <h2 className="text-3xl font-bold text-center mb-6 bg-[#D50032] w-fit py-2 px-10 rounded-full text-white">Meet The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {teams.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
