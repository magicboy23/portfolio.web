import Jumbotron from "@/components/Jumbotron";
import CardExpertise from "@/components/Expertise";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
export default function Home() {
  return (
    <div>
      {/* Pages dari Jumbotron dan juga Expertise */}
      <Jumbotron />
      <CardExpertise />
      <Portfolio />
      <About />
    </div>
  );
}
