import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";

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
        university: "Facebook",
        qualification: "Web Development",
        years: "2020 - 2022",
      },
      {
        university: "Google",
        qualification: "Web Development",
        years: "2022 - 2024",
      },
      {
        university: "Microsoft",
        qualification: "Web Development",
        years: "2025 - present",
      },
    ],
  },
];

const SkillData = [
  {
    title: "skills",
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
