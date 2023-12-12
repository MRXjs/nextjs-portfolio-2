import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
import DevImg from "./DevImg";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Sures Ranathunga",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+94 764 117 246",
  },
  {
    icon: <MailIcon size={20} />,
    text: "sureshmadawa763@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 21 Nov, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "National Diploma on ICT ",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "321 Blue Avenue, NY , USA",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Collage Of Technology Badulla",
        qualification: "National Diploma ICT",
        years: "2018 - 2020",
      },
      {
        university: "Vocational Training Authority Wellawaya",
        qualification: "Computer Hardware NVQ LEVEL 4 ",
        years: "2016 - 2017",
      },
      {
        university: "Collage Of Technology Badulla",
        qualification: "National Diploma ICT",
        years: "2018 - 2020",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Facebook",
        role: "Web Development",
        years: "2020 - 2022",
      },
      {
        company: "Google",
        role: "Web Development",
        years: "2022 - 2024",
      },
      {
        company: "Microsoft",
        role: "Web Development",
        years: "2025 - present",
      },
    ],
  },
];

const SkillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML / CSS / Sass",
      },
      {
        name: "Tailwind / Matirial UI / Bootstrap",
      },
      {
        name: "Javascript / Python / Rust / PHP",
      },
      {
        name: "React / NEXT / ReactNative / Electron / Tauri / Express",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative flex-1 hidden xl:flex ">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative "
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto " value="personal">
                  Personal info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto "
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto " value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 md-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="max-w-xl mx-auto subtitle xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.{" "}
                    </p>
                    {/* icons */}
                    <div className="grid gap-4 mb-12 xl:grid-cols-2">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center mx-auto gap-x-4 xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* {languages} */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary ">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English , Sinhala</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="mb-8 text-center h3 xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/*experience*/}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none ">
                                      {company}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/*education*/}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none ">
                                      {university}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* {skills} */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8 h3">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border">
                        {/* skill list */}
                        <div>
                          {getData(SkillData, "skills").data.map(
                            (item, index) => {
                              const { name } = item;
                              return (
                                <div
                                  key={index}
                                  className="w-2/4 mx-auto text-center xl:text-left xl:mx-0"
                                >
                                  <div className="font-semibold">{name}</div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left ">
                        Tools
                      </h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* tool list */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {getData(SkillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index} className="">
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
