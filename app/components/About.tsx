'use client'
import SectionHeading from './Section-heading'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}} id="about">
     <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in
        <span className="font-medium"> Bachelor of Engineering from Deccan College of Engineering and Technology</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned
        <span className="font-medium"> full-stack web development</span>.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with Python,Mysql. I am always looking to
        learn new technologies. I am currently looking for a
        <span className="font-medium"> full-time position</span> as a software
        developer.
      </p>

      <p>
      <span className="italic">When I&apos;m not coding</span>
, I enjoy playing
        video games, watching movies,cooking and Exercise. I also enjoy
        <span className="font-medium">learning new things</span>. I am currently
        learning about
        <span className="font-medium">New dishes</span>
      </p>
    </motion.section>
  )
}

export default About
