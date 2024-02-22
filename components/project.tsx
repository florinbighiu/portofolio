"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="flex flex-col items-center mb-8 last:mb-0">
      <div className="bg-gray-100 dark:bg-transparent border dark:border-gray-200/10 border-gray-900/10 rounded-lg min-h-[33rem]">
        <div className="w-full px-6 pt-6">
          <Image
            src={imageUrl}
            alt="Project image"
            className="rounded-lg h-[15rem] object-fit border border-gray-700/10 hover:scale-105 transition-all"
          />
        </div>
        <section className="p-6 transition dark:text-white ">
          <h3 className="text-2xl text-center font-semibold mb-4">{title}</h3>
          <p className="text-gray-700 dark:text-white/70 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}>
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
