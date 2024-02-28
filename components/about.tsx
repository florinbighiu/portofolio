/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import profileImg from "@/public/283185044_2606893879444159_1671680474858766700_n.jpg";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 mt-3 w-full text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row md:space-x-8">
          <Image
            className="transition-all hover:translate-x-2 hover:translate-y-2 cursor-pointer rounded-lg object-cover border-[0.2rem] dark:border-white/65 border-slate-300/65 shadow-xl w-full lg:w-1/2 h-96"
            src={profileImg}
            alt="Florin's picture"
          />
          <div className="flex flex-col space-y-4 mt-6 lg:mt-0 xl:mt-3">
            <p className="text-gray-700 dark:text-gray-100 text-start leading-loose">
              I am primarily a patient individual who excels in high-pressure environments and
              consistently embraces an optimistic perspective. My ability to remain composed and
              positive in challenging situations enables me to approach tasks and projects with a
              level-headed attitude and a focus on finding solutions. I thrive in situations that
              demand resilience, adaptability, and a constructive outlook, allowing me to contribute
              effectively to a team's success and deliver results even in the face of adversity.
            </p>
            <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-5">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>
                  <a href="tel:+40748964313">+40 748 964 313</a>
                </span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Iasi, Romania</span>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-2" />
                <a href="https://www.linkedin.com/in/florin-bighiu/">florin-bighiu</a>
              </li>
              <li className="flex items-center">
                <FaGithub className="mr-2" />
                <a href="https://github.com/florinbighiu">florinbighiu</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>florin.bighiu1@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
