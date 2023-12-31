"use client";
import Link from "next/link";
import { Button } from "./ui/button";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Excepteur enim aute deserunt id nostrud cupidatat officia quis in.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Solstice Website",
    description:
      "Excepteur enim aute deserunt id nostrud cupidatat officia quis in.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Lumina Website",
    description:
      "Excepteur enim aute deserunt id nostrud cupidatat officia quis in.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Evolve Website",
    description:
      "Excepteur enim aute deserunt id nostrud cupidatat officia quis in.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Ignite Website",
    description:
      "Excepteur enim aute deserunt id nostrud cupidatat officia quis in.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Excepteur enim aute deserunt id nostrud cupidatat officia quis in.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack js",
    name: "Serenity Website",
    description:
      "Excepteur enim aute deserunt id nostrud cupidatat officia quis in.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack js",
    name: "Nova Website",
    description:
      "Excepteur enim aute deserunt id nostrud cupidatat officia quis in.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack js",
    name: "Zenith Website",
    description:
      "Excepteur enim aute deserunt id nostrud cupidatat officia quis in.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="mb-4 section-title">Latest Projects</h2>
          <p className="mb-8 subtitle">
            Deserunt excepteur laboris fugiat id eu et.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slider */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
