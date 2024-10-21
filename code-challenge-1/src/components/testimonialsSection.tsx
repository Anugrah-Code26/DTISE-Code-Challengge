import React, { memo } from "react";
import Image from "next/image";
import DarkBG from "../public/images/black-bg.webp";

const testimonials = [
  {
    quote: "Mushroom Motorsports custom karts give me the edge I need when racing Bowser!",
    author: "- Mario",
  },
  {
    quote: "Their kart designs are elegant and powerful. Perfect for any track!",
    author: "- Princess Peach",
  },
  {
    quote: "The experience here is unmatched. Every race feels like an adventure!",
    author: "- Toad",
  },
];

const TestimonialsSection: React.FC = memo(() => {
  return (
    <section className="testimonials py-16 relative">
      <div className="absolute inset-0">
        <Image
          src={DarkBG}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          placeholder="blur"
          priority
        />
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">What Our Racers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="text-center italic bg-white p-6 rounded-lg shadow">
              &quot;{testimonial.quote}&quot; {testimonial.author}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
