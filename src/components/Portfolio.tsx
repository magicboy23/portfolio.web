const skills = [
  {
    src: "my telkomsel.png",
  },
  {
    src: "my tri.png",
  },
  {
    src: "marketing byu.jpg",
    highlight: false,
  },
  {
    src: "my xl.png",
  },
  {
    src: "oreo-comp.jpg",
  },
  {
    src: "strawberry-comp.jpg",
  },
  {
    src: "matcha-comp.jpg",
  },
  {
    src: "coklat-comp.jpg",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-[#181818] px-4 py-24">
      <p className="text-center text-3xl font-semibold text-[#f6ff00]">
        Portfolio
      </p>
      <div className="flex min-h-screen items-center justify-center bg-[#181818] p-6">
        <div className="grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center rounded-lg p-4 shadow-md transition-all ${
                skill.highlight
                  ? "bg-yellow-500"
                  : "border border-white bg-[#181818]"
              }`}
            >
              <img src={skill.src} className="h-50 mb-1 w-80 object-contain" />
              <span className="text-sm font-semibold"></span>
            </div>
          ))}
        </div>
      </div>
      <div className="m-16 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="grid grid-cols-1 md:grid-cols-2"></div>
      </div>
      ;
    </section>
  );
};

export default Portfolio;
