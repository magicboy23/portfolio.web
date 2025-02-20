import CardExpertise from "./CardExpertise";
import {
  BoxIcon,
  ActivityIcon,
  LayoutDashboardIcon,
  ComputerIcon,
} from "lucide-react";

const data = [
  {
    title: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    icon: BoxIcon,
  },
  {
    title: "Poster Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    icon: ActivityIcon,
  },
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Web Designer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    icon: ComputerIcon,
  },
];

const Expertise = () => {
  return (
    <section className="bg-[#181818] px-4 py-24">
      <p className="text-center text-3xl font-semibold text-[#f6ff00]">
        My Expertise
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
        {data.map((item, index) => {
          return (
            <CardExpertise
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
