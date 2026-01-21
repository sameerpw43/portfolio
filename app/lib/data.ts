import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import screenshort1 from '../../public/Screenshot_5.png';
import screenshort2 from '../../public/Screenshot_6.png';
import screenshort3 from '../../public/Screenshot_7.png';
import screenshort4 from '../../public/Screenshot_8.png'
import JobSea from '../../public/JobSea.png';
import healthcarePlaceholder from '../../public/healthcare-placeholder.svg';
import ccmImage from '../../public/ccm.jpeg';


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
    name: "Certifications",
    hash: "#certifications",
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
      "Graduated with B.E. in Electronics and Communication Engineering from Deccan College of Engineering and Technology",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "Led frontend development using React.js & Next.js, built RESTful APIs with Node.js & Express.js, and optimized database performance for scalable deployments.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Nov 2023",
  },
   {
    title: "Full Stack Web Developer",
    location: "Hyderabad, Telangana, India",
    description:
    "Currently working at Elate Care Solutions developing AI-powered healthcare applications including Sofiya (automated patient-doctor communication), Remote Patient Monitor Portal, and CCM.AI (HIPAA-compliant cardiac care app). Specializing in MERN stack, AI/GenAI technologies, and healthcare solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Present",
  },
  
] as const;

export const certificationsData = [
  {
    title: "HIPAA Workforce Proficiency Certification",
    issuer: "4MedPlus Training",
    date: "2025",
    description: "Comprehensive HIPAA compliance training covering healthcare data privacy, security regulations, and workforce proficiency requirements for healthcare applications.",
    certificateLink: "/Khan_Certificate of HIPAA Workforce Proficiency _CERT_2025.pdf",
    credentialId: "CERT_2025",
  },
] as const;

export const projectsData = [
  {
    title: "JobSea",
    description:
      "Job board for both recruiter and jobseeker. I am the sole fullstack developer. It has features like resume builder, search jobs, post jobs.",
    ProjectLink: 'www.jobsea.asia',
    tags: ["React", "Express.js", "CSS", "MongoDB", "Redux", "Stripe Payment Gateway"],
    imageUrl: JobSea,
  },
  {
    title: "Neuetrinostech",
    description:
      "I worked as a full-stack developer in this startup project for 5 months. CRM solutions, web and application development.",
    ProjectLink: 'www.neuetrinostech.com',
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: screenshort1,
  },
  {
    title: "E-commerce Website",
    description:
      "As a passionate full stack web developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I have successfully developed and deployed a feature-rich e-commerce website that offers seamless user experiences and secure online transactions.",
    ProjectLink: "https://calm-gray-gorilla-hat.cyclic.app/",
    tags: ["React", "Express.js", "TailwindCSS", "MongoDB", "Redux", "BigTree Payment Gateway", "Ant Design"],
    imageUrl: screenshort2,
  },
  {
    title: "React Crypto Trading",
    description:
      "I have developed a web application using React.js and Chakra UI that is designed to assist users with their cryptocurrency trading. This app can provide real-time market data, analysis tools, and a user-friendly interface to make informed trading decisions.",
    ProjectLink: "https://react-crypto-app-sameerpw43.vercel.app/",
    tags: ["React", "Chakra UI", "Coinbase API"],
    imageUrl: screenshort3,
  },
  {
    title: "Crypto Investment",
    description:
      "I have developed a web application using React.js, Bootstrap, and the Binance WebSocket API. The application displays the current exchange rates for various cryptocurrencies and allows users to choose which currency rates they would like to view.",
    ProjectLink: "https://crypto-react-js-ytm3.vercel.app/",
    tags: ["React", "Binance WebSocket", "Bootstrap"],
    imageUrl: screenshort4,
  },
  {
    title: "Sofiya - AI Healthcare Automation",
    description:
      "AI-powered automation system to streamline patient-doctor communication with automated call workflows, response recording, and actionable insights generation. Enhanced healthcare follow-ups reducing manual effort.",
    ProjectLink: 'Confidential - Elate Care Solutions',
    tags: ["React.js", "Material-UI", "Node.js", "Express.js", "MongoDB", "Zustand", "Jest", "AI"],
    imageUrl: healthcarePlaceholder,
  },
  {
    title: "Remote Patient Monitor Portal",
    description:
      "Real-time patient monitoring platform for at-risk individuals with virtual consultations, proactive risk assessments, and remote assistance ensuring timely medical intervention.",
    ProjectLink: 'Confidential - Elate Care Solutions',
    tags: ["React.js", "Material-UI", "Node.js", "Express.js", "MongoDB", "Zustand", "Jest"],
    imageUrl: healthcarePlaceholder,
  },
  {
    title: "CCM.AI - Cardiac Care Management",
    description:
      "HIPAA-compliant mobile & web app for emergency cardiac care (STEMI patients) across Mount Sinai hospitals. Features real-time alarm management, patient tracking, EKG uploads, secure communication, and care team coordination reducing treatment delays by 30 minutes.",
    ProjectLink: 'Available on App Store & Google Play (Confidential)',
    appStoreLink: 'https://apps.apple.com/in/app/ccm-ai/id6746357626',
    playStoreLink: 'https://play.google.com/store/apps/details?id=ai.crosscare.ccm',
    tags: ["MERN Stack", "Capacitor", "Secure APIs", "HIPAA Compliance", "Real-time", "Healthcare", "Mobile App"],
    imageUrl: ccmImage,
  },
] as const;

export const skillsData = [
  // MERN Stack & Core Technologies
  "MERN Stack",
  "React",
  "Node.js", 
  "Express.js",
  "MongoDB",
  "Next.js",
  "JavaScript",
  "TypeScript",
  
  // Mobile App Development
  "Mobile App Development",
  "React Native",
  "Flutter",
  "Capacitor",
  "Ionic",
  
  // AI/GenAI Technologies
  "AI/GenAI Technologies",
  "LangChain",
  "RAG",
  "Embeddings",
  "Vector Databases",
  "Pinecone",
  "Prompt Engineering",
  
  // Frontend & Styling
  "HTML",
  "CSS",
  "TailwindCSS",
  "Material-UI",
  "React Query",
  
  // Backend & Database
  "MySQL",
  "RestAPI",
  
  // State Management
  "Redux",
  "Zustand",
  
  // Authentication & Payments
  "JWT Authentication",
  "OAuth",
  "Auth0",
  "Stripe",
  "Razorpay",
  "BigTree",
  
  // Testing & Tools
  "Jest",
  "Vitest",
  "Git",
  "GitHub",
  "Vite",
  "Webpack",
  "ESLint",
  
  // Cloud & Deployment
  "Vercel",
  "AWS EC2",
  "AWS S3",
  "AWS VPC",
  
  // Other Languages & Frameworks
  "Python",
  "Dart",
  "Framer Motion",
] as const;
