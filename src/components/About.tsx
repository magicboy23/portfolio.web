import React from "react";

const AboutMe = () => {
  return (
    <section className="flex justify-center bg-[#0b4344] py-12">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 px-6 text-gray-800 shadow-lg transition duration-300 hover:shadow-2xl">
        <h2 className="mb-6 text-center text-3xl font-bold">About Me</h2>
        <p className="mb-6 text-center">
          I'm a passionate UI/UX Designer and Front-End Developer with a keen
          interest in creating intuitive and aesthetically pleasing digital
          experiences. With a background in digital design and development, I
          specialize in crafting user-friendly interfaces that enhance user
          engagement and satisfaction.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">Core Skills</h3>
            <ul className="list-inside list-disc">
              <li>JavaScript (ES6+), TypeScript</li>
              <li>React.js, Next.js</li>
              <li>HTML5, CSS3, Tailwind CSS</li>
              <li>Figma, Adobe XD</li>
              <li>Git, GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold">Key Values</h3>
            <ul className="list-inside list-disc">
              <li>Timeliness & meeting deadlines</li>
              <li>Attention to detail & clean design</li>
              <li>Effective communication & collaboration</li>
              <li>Continuous learning & growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
