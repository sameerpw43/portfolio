"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { certificationsData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");

  return (
    <section id="certifications" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Certifications</SectionHeading>
      <div className="max-w-[53rem] mx-auto">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden p-6 mb-6 hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaCertificate className="text-white text-xl" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <span className="text-sm text-gray-600 dark:text-white/60 mt-1 sm:mt-0">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-700 dark:text-white/70 mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <HiDownload />
                    View Certificate
                  </a>
                  
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/60">
                      <span>Credential ID:</span>
                      <span className="font-mono bg-gray-200 dark:bg-white/10 px-2 py-1 rounded">
                        {cert.credentialId}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}