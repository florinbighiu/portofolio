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
            className="cursor-pointer rounded-lg object-cover border-[0.2rem] dark:border-white/65 border-slate-300/65 shadow-xl w-full lg:w-1/4 h-[26em]"
            src={profileImg}
            alt="Florin's picture"
          />
          <div className="flex flex-col justify-center lg:w-2/3 space-y-8 px-3 md:px-0 mt-8 lg:mt-2">
            <p className="text-start text-lg leading-relaxed lg:ml-8">
              Dynamic Full Stack Developer adept in all stages of advanced web development. Over the
              past eighteen months, I have gained valuable experience in multiple technologies,
              including Java, Spring Framework, JavaScript, React, as well as SQL databases such as
              PostgreSQL. Able to effectively self-manage during independent projects, as well as
              collaborate in a team setting.
            </p>
            <ul className="grid font-semibold sm:grid-cols-2 p-1 lg:ml-8 gap-y-4 gap-x-4">
              <li className="flex items-center text-gray-700 dark:text-gray-200 dar hover:text-gray-500">
                <FaPhone className="mr-2 text-blue-500" />
                <span>
                  <a href="tel:+40748964313" className="">
                    +40 748 964 313
                  </a>
                </span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-500">
                <FaMapMarkerAlt className="mr-2 text-green-500" />
                <span>Iasi, Romania</span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-500">
                <FaLinkedin className="mr-2 text-blue-700" />
                <a href="https://www.linkedin.com/in/florin-bighiu/" className="">
                  florin-bighiu
                </a>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-500">
                <FaGithub className="mr-2 dark:text-gray-50 text-gray-900" />
                <a href="https://github.com/florinbighiu" className="">
                  florinbighiu
                </a>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-500">
                <FaEnvelope className="mr-2 text-red-500" />
                <span className="whitespace-nowrap">florin.bighiu1@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
