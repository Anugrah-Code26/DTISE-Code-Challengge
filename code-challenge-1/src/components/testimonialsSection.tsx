import React from "react";
import DarkBG from "../public/images/black-bg.webp";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials py-16" style={{ backgroundImage: `url(${DarkBG.src})` }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Racers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
          <blockquote className="text-center italic bg-white p-6 rounded-lg shadow">
           &quot;Mushroom Motorsports custom karts give me the edge I need when racing Bowser!&quot;- Mario
          </blockquote>
          <blockquote className="text-center italic bg-white p-6 rounded-lg shadow">
           &quot;Their kart designs are elegant and powerful. Perfect for any track!&quot;- Princess Peach
          </blockquote>
          <blockquote className="text-center italic bg-white p-6 rounded-lg shadow">
           &quot;The experience here is unmatched. Every race feels like an adventure!&quot;- Toad
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
