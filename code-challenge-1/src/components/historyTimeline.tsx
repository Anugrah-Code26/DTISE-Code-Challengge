import React from 'react';

interface Event {
  year: number;
  title: string;
  description: string;
}

const events: Event[] = [
  {
    year: 2015,
    title: 'Company Founded',
    description:
      'Mushroom Motorsports was established with a vision to blend kart racing with entertainment inspired by the popular Mario Kart franchise.',
  },
  {
    year: 2016,
    title: 'First Custom Kart Released',
    description:
      'Launched the first line of custom karts designed for both professional racers and casual enthusiasts.',
  },
  {
    year: 2018,
    title: 'International Kart Racing Series',
    description:
      'Hosted the inaugural Mushroom International Kart Racing series, attracting participants from around the globe.',
  },
  {
    year: 2020,
    title: 'Rainbow Road Experience Opened',
    description:
      'Opened a new driving experience on a state-of-the-art track inspired by Rainbow Road, drawing in thrill-seekers and families.',
  },
  {
    year: 2022,
    title: 'Expanding into E-Sports',
    description:
      'Launched a competitive e-sports league to engage with a younger audience and broaden the brand\'s reach.',
  },
  {
    year: 2024,
    title: 'Partnership with Local Tracks',
    description:
      'Forged partnerships with local tracks to offer Mushroom Motorsports driving experiences nationwide.',
  },
];

const HistoryTimeline: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="mx-auto px-4 py-10 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">Mushroom Motorsports Company History</h1>
        {events.map(({ year, title, description }) => (
          <div key={year} className="border-l-4 border-[#D50032] pl-4 mb-6">
            <h3 className="text-xl font-semibold text-gray-800">{year} - {title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MemoizedHistoryTimeline = React.memo(HistoryTimeline);
MemoizedHistoryTimeline.displayName = "HistoryTimeline";

export default MemoizedHistoryTimeline;
