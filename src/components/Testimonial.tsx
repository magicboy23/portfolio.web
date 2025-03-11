import React from "react";

const testimonials = [
  {
    name: "Putri",
    feedback:
      "Working with this designer was a fantastic experience. Their attention to detail is outstanding!",
    image: "cewe1.jpg",
  },
  {
    name: "Cesar YKS",
    feedback:
      "Highly professional and delivers on time. The UI/UX design was intuitive and beautiful!",
    image: "cesar.jpeg",
  },
  {
    name: "Vijay",
    feedback:
      "Exceeded my expectations! The website design was modern, clean, and perfectly functional.",
    image: "orgindia.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0b4344] py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-8 text-center text-6xl font-bold text-white">
          Testimonials
        </h2>
        <div className="motion-preset-oscillate grid gap-6 motion-duration-2000 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 text-center shadow-md"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto mb-4 h-20 w-20 rounded-full"
              />
              <p className="italic text-gray-700">"{testimonial.feedback}"</p>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
