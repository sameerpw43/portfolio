"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/app/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  ProjectLink,
  imageUrl,
  ...props
}: ProjectProps) {
  const appStoreLink = 'appStoreLink' in props ? props.appStoreLink : undefined;
  const playStoreLink = 'playStoreLink' in props ? props.playStoreLink : undefined;
  const [isExpanded, setIsExpanded] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Truncate description if it's longer than 150 characters
  const shouldTruncate = description.length > 150;
  const displayDescription = isExpanded || !shouldTruncate 
    ? description 
    : `${description.substring(0, 150)}...`;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className={`bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative ${isExpanded ? 'sm:h-auto' : 'sm:h-[20rem]'} hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}>
        <div className={`pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col ${isExpanded ? 'h-auto' : 'h-full'} sm:group-even:ml-[18rem]`}>
          <h3 className="text-2xl font-semibold">{title}</h3>
          
          {/* Project Links */}
          <div className="mt-2">
            {appStoreLink && playStoreLink ? (
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-600 dark:text-white/60">Available on:</p>
                <div className="flex gap-3">
                  <a 
                    href={appStoreLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                  >
                    App Store
                  </a>
                  <a 
                    href={playStoreLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 text-sm"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            ) : (
              <p className="text-sm">
                Project Link: 
                <a 
                  href={ProjectLink.startsWith('http') ? ProjectLink : `https://${ProjectLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-1"
                >
                  {ProjectLink}
                </a>
              </p>
            )}
          </div>
          
          <div className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            <p>{displayDescription}</p>
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm mt-1 underline focus:outline-none"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
          <ul className={`flex flex-wrap mt-4 gap-2 ${isExpanded ? 'mb-4' : 'sm:mt-auto'}`}>
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
