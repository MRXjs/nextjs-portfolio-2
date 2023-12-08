import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-0">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="mb-4 h1">Hello my name is Sures Ranathunga</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Velit veniam id esse velit commodo sunt ex id. Velit veniam id
              esse velit commodo sunt ex id.
            </p>
            {/* buttons */}
            <div>
              <Link href="/contact">
                <Button className="">
                  Contact me <Send size={"18"} />
                </Button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="relative hidden xl:flex ">image</div>
        </div>
        {/* icon */}
        <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
