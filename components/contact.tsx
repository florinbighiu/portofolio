/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sends-email";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-8 sm:mb-8 w-full lg:w-3/5 text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <h2 className="text-5xl dark:text-white font-semibold uppercase mb-5">Let's get in touch!</h2>
      <div className="flex dark:text-black mx-2 mt-10 bg-transparent border border-gray-800/10 dark:border-gray-100/10 min-w-full dark:text-white/80 text-black flex-col justify-center p-8 rounded-2xl">
        <form
          className="flex flex-col "
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}>
          <input
            className="h-14 px-4 rounded-xl borderBlack bg-gray-100 dark:bg-gray-600 dark:bg-opacity-50 dark:focus:bg-opacity-100 transition-all outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-xl borderBlack p-4 bg-gray-100 dark:bg-gray-600 dark:bg-opacity-50 dark:focus:bg-opacity-100 transition-all outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
