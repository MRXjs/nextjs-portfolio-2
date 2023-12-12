"use client";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

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
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [Categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all project' retunr all Projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="grid w-full h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {Categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs containe */}
          <div className="grid grid-cols-1 gap-4 text-lg xl:mt-8 lg:grid-cols-3 ">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
