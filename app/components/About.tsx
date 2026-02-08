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
        <span className="font-medium"> Electronics and Communication Engineering from Deccan College of Engineering and Technology</span>, I pursued my
        passion for programming and became a
        <span className="font-medium"> Full Stack Web Developer</span> with
        <span className="font-medium"> 2 years 9 months</span> of professional experience.
        <span className="italic"> I specialize in</span> building scalable web and mobile solutions using the
        <span className="font-medium">
          MERN stack, Next.js, Flutter, and AI technologies
        </span>
        . I have hands-on experience with <span className="font-medium">Generative AI, RAG, LangChain, and vector databases</span>. 
        Currently, I&apos;m developing <span className="underline">HIPAA-compliant healthcare platforms</span> that integrate 
        secure APIs and AI-powered automation systems.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, cooking and exercising. I also enjoy
        <span className="font-medium"> learning new technologies</span> and am currently
        exploring advanced <span className="font-medium">AI/ML applications in healthcare</span>.
      </p>
    </motion.section>
  )
}

export default About

