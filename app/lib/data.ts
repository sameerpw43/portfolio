import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import screenshort1 from '../../public/Screenshot_5.png';
import screenshort2 from '../../public/Screenshot_6.png';
import screenshort3 from '../../public/Screenshot_7.png';
import screenshort4 from '../../public/Screenshot_8.png'
import JobSea from '../../public/JobSea.png';


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's of Engineering",
    location: "Hyderabad, India",
    description:
      "I have Graduated from Deccan College of Engineering and technology",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I have worked as a full-stack developer  in neuetrinostech company for 6 months.My Stack includes Mern stack,Next.js,Tailwind",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
   {
    title: "Software Engineer",
    location: "Hyderabad,Telangana,India",
    description:
    "I'm  currently working as full-stack software engineer with  of experience building engaging and scalable web applications. Currently at AptCare.ai, a company focused on revolutionizing the healthcare industry, I leverage my mastery of the MERN stack, Next.js for server-side rendering, and Tailwind CSS,MUI, for rapid UI development",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Current",
  },
  
] as const;

export const projectsData = [
  {
    title: "JobSea",
    description:
      "Job board for both recruiter and jobseeker. I am the sole fullstack developer. It has features like resumbe builder,search jobs,post jobs.",
      ProjectLink:'www.jobsea.asia',
    tags: ["React", "Express.js", "CSS", "MongoDB", "Redux","stripe payment gateway"],
    imageUrl:  JobSea,
  },
  {
    title: "Neuetrinostech",
    description:
      "I working as a full-stack developer in this startup project for 5 months. CRM solutions,web and application development.",
      ProjectLink:'www.neuetrinostech.com',
      tags: ["HTML","CSS","Javascript"],
    imageUrl:  screenshort1,
  },
  
  {
    title: "E-commerce website",
    description:
      "As a passionate full stack web developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I have successfully developed and deployed a feature-rich e-commerce website that offers seamless user experiences and secure online transactions. With a strong focus on user-centric design and functionality, I have implemented key features such as login/authentication, registration, and integration with popular payment gateways..",
    ProjectLink:"https://calm-gray-gorilla-hat.cyclic.app/",
      tags: ["React", "Express.js", "TailwindCSS", "MongoDB", "Redux","bigtree payment gateway","antd"],
    imageUrl:  screenshort2,
  },
  {
    title: "React Crypto trading",
    description:
      "I have developed a web application using React.js and Chakra UI that is designed to assist users with their cryptocurrency trading. This app can provide real-time market data, analysis tools, and a user-friendly interface to make informed trading decisions. By leveraging the power of React.js and Chakra UI, users can enjoy a seamless experience with optimized performance and responsive design.",
   ProjectLink:"https://react-crypto-app-sameerpw43.vercel.app/",
      tags: ["React", "Chakra UI","Coin base api"],
    imageUrl:  screenshort3,
  },
  {
    title: "Crypto Investment",
    description:
      "I have developed a web application using React.js, Bootstrap, and the Binance WebSocket API. The application displays the current exchange rates for various cryptocurrencies and allows users to choose which currency rates they would like to view. Additionally, the application can provide an estimated return for a given investment, based on the selected currency rate.",
      ProjectLink:"https://crypto-react-js-ytm3.vercel.app/",
      tags: ["React", "binance websocket","bootstrap"],
    imageUrl:  screenshort4,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
   "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Mui",
  "Vite",
  "Zustand",
  "ReactQuery"
  "Tailwind",
  "Express",
  "MongoDB",
  "Redux",
  "RestAPI",
  
 
  "Python",

  "Framer Motion",
] as const;
