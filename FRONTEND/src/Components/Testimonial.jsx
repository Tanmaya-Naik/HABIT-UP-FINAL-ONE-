import testimonials from "../data/Testimonial";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-14">
        <p className="text-yellow-500 uppercase tracking-widest">
          Testimonials
        </p>

        <h2 className="text-4xl font-bold">
          Success Stories
        </h2>

        <p className="text-zinc-400 mt-4">
          Hear what our mentors and learners say about HabitUP.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {testimonials.map(
          (testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          )
        )}

      </div>

    </section>
  );
}

export default Testimonial;