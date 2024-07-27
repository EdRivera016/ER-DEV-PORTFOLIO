import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Full Stack Engineer</span>
            <h1 className="h1 mb-6">
              Hello I`m <br /> <span className="text-accent">Edwin Rivera</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am passionate about creating seamless digital experiences,
              leveraging my proficiency in multiple programming languages and
              technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variants="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Douwnload CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-8">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hove:bg-accent hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
