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
      <div className="flex flex-col lg:flex-row gap-[3rem]">
        <div className="flex items-start lg:items-center justify-center lg:justify-end">
          <Image
            src={profileImg}
            alt="florin"
            className="w-2/3 lg:w-2/3 h-[30rem] transition-all hover:translate-x-2 hover:translate-y-2 cursor-pointer rounded-lg object-cover border-[0.2rem] dark:border-white/65 border-slate-300/65 shadow-xl"
          />
        </div>
        <div className="lg:mx-6 mx-2 my-4 flex-1">
          <p className="m-2 text-xl text-start tracking-tighter">
            I am primarily a patient individual who excels in high-pressure environments and
            consistently embraces an optimistic perspective. My ability to remain composed and
            positive in challenging situations enables me to approach tasks and projects with a
            level-headed attitude and a focus on finding solutions. I thrive in situations that
            demand resilience, adaptability, and a constructive outlook, allowing me to contribute
            effectively to a team's success and deliver results even in the face of adversity.
          </p>
          <section className="py-8">
            <div className="max-w-2xl m-2">
              <div className="">
                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-5 font-semibold">
                  <li className="flex items-center">
                    <FaPhone className="mr-2" />
                    <span>+40 748 964 313</span>
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
          </section>
        </div>
      </div>
    </motion.section>
  );
}
