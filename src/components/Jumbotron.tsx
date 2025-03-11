import { Button } from "./ui/button";
import Image from "next/image";
const Jumbotron = () => {
  return (
    <section className="bg-[#0b4344] px-4 py-24">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* KOLOM 1  */}
          <div className="flex items-center">
            <div className="space-y-4">
              <p className="motion-preset-typewriter-[10] text-4xl text-white">
                Hi There! i'am Tribaskoro
              </p>
              <p className="text-6xl font-semibold text-[#ffb71c] md:text-6xl">
                Frontend developer
              </p>
              <p className="text-white">
                I'm a junior FrontEnd developer with experiense <br /> in many
                different languages, frameworks. I'm always looking <br />
                for new challenges.
              </p>

              <Button className="bg-[#ffb71c] font-semibold text-black">
                Hire Me
              </Button>
              <div className="motion-preset-wobble max-w-md overflow-hidden rounded-xl bg-[#ffffff] p-4 shadow-md motion-duration-2000">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="davinakaramoy7.jpg"
                    alt="User Avatar"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Davina Karamoy
                    </h4>
                    <p className="text-sm text-gray-500">1 days ago</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">
                  Thank you very much for making a food design poster for my
                  product, I love you
                </p>
              </div>
              <div className="motion-preset-oscillate max-w-md overflow-hidden rounded-xl bg-white p-4 shadow-md motion-duration-2000">
                <div className="flex items-center space-x-4">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    src="anya.jpg"
                    alt="User Avatar"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Anya Geraldine
                    </h4>
                    <p className="text-sm text-gray-500">3 days ago</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">
                  Sukaaa banget pokoknya. Thank you so much
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM 2 */}
          <div>
            <div className="relative h-[320px] w-full md:h-[500px]">
              <Image
                src="/andre-bg.png"
                alt="person-profile-picture"
                objectFit="contain"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
