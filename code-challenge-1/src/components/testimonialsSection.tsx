import DarkBG from "../public/images/black-bg.jpg";

const TestimonialsSection = () => {
  return (
    <section className="testimonials py-16" style={{ backgroundImage: `url(${DarkBG.src})` }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Racers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
          <blockquote className="text-center italic bg-white p-6 rounded-lg shadow">
            "Mushroom Motorsports custom karts give me the edge I need when racing Bowser!" - Mario
          </blockquote>
          <blockquote className="text-center italic bg-white p-6 rounded-lg shadow">
            "Their kart designs are elegant and powerful. Perfect for any track!" - Princess Peach
          </blockquote>
          <blockquote className="text-center italic bg-white p-6 rounded-lg shadow">
            "The experience here is unmatched. Every race feels like an adventure!" - Toad
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
