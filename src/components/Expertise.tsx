import React from "react";

const MySkills = () => {
  return (
    <section className="flex justify-center bg-[#0b4344] py-12">
      <div className="mx-auto max-w-6xl px-6 text-gray-800">
        <h2 className="mb-8 text-center text-6xl font-bold text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-6 text-center shadow-lg transition hover:shadow-xl"
            >
              <div className="mb-4 text-4xl">{skill.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const skills = [
  {
    icon: "💻",
    title: "Web Design",
    description: "Creating visually appealing and user-friendly designs.",
  },
  {
    icon: "⚙️",
    title: "Web Development",
    description: "Building responsive and interactive web applications.",
  },
  {
    icon: "📱",
    title: "Mobile UI/UX",
    description: "Designing seamless experiences for mobile apps.",
  },
  {
    icon: "🖌️",
    title: "Illustration",
    description: "Bringing ideas to life with creative illustrations.",
  },
  {
    icon: "📢",
    title: "Branding",
    description: "Crafting unique and memorable brand identities.",
  },
  {
    icon: "📊",
    title: "Marketing",
    description: "Using strategic marketing to drive engagement.",
  },
];

export default MySkills;
