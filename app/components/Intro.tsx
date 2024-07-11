'use client';
import Image from 'next/image';
import sameer from '../../public/sameer.jpg';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id="home">
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
          initial={{opacity:0,scale:0}}
          animate={{opacity:1,scale:1}}
          transition={{
            type:"tween",
            duration:0.2,
          }}>
            <Image src={sameer} alt='sameer khan'className="h-24 w-24 rounded-full border-[0.35rem]  border-white shadow-xl"/>
            </motion.div> <motion.span className='absolute bottom-0 right-0 text-4xl'
             initial={{opacity:0,scale:0}}
             animate={{opacity:1,scale:1}}
             transition={{
               type:"spring",
              stiffness:125,
              delay:0.1,
              duration:0.7,
             }}
            >{'👋'}</motion.span>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}>
      <span className="font-bold">Hello, I&apos;m Sameer Khan.</span>
 I&apos;m 
        <span className="font-bold"> Software Engineer</span> with
        <span className="font-bold"> 1.2 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is
        <span className="underline">React (&#40;Mern Stack&#41;)</span>.

      </motion.h1>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium' initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}} transition={{
        delay:0.1,
      }}>
        <Link href="#contact" className='group bg-gray-900  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 focus:scale-110 transition'>
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
        </Link>
        <a className='bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 focus:scale-110 transition cursor-pointer border border-black/10' href='/resume.pdf' download>Download Resume<HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full border border-black/10 hover:scale-105 focus:scale-[1.15] active:scale-105 active'href='https://www.linkedin.com/in/sameer-khan-7ba159225/' target='_blank'><BsLinkedin/>
        </a>
        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full border-black/10  hover:scale-105 focus:scale-[1.15] active:scale-105' href='https://github.com/sameerpw43?tab=repositories' target='_blank'><FaGithubSquare/>
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
