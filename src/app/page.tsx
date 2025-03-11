import Jumbotron from "@/components/Jumbotron";
import About from "@/components/About";
import CardExpertise from "@/components/Expertise";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div>
      {/* Pages dari Jumbotron dan juga Expertise */}
      <Jumbotron />
      <About />
      <CardExpertise />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Contact />
    </div>
  );
}
