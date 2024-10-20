"use client";

import { testimonialTypes } from "@/interfaces/sanity";
import { imageUrlFor } from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Testimonials({ testimonials }: { testimonials: testimonialTypes[] }) {
  const [currReview, setCurrReview] = useState<number>(0);

  return (
    <section className="px-4 sm:px-8 md:px-32 z-40 relative testimonials pt-4">
      <h3 className="absolute top-3 left-1/2 -translate-x-1/2 z-50 text-5xl md:text-[84px] font-light md:tracking-widest uppercase opacity-5">
        Testimonials
      </h3>
      <h4 className="text-center font-dm text-3xl md:text-5xl z-50 mb-20 mt-6">
        Recommendations
      </h4>

      <div className="w-max mx-auto mt-20">
        <div>
          <div className="text-lg mt-32 body relative z-50">
            <img src="icons/qoutes.svg" className="qoute" />
            <motion.div
              key={`review-${currReview}`} // Unique key for the review text
              variants={{
                hidden: { x: -150, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <PortableText value={[...testimonials[currReview].review]} />
            </motion.div>
          </div>
          <motion.div
            key={`user-${currReview}`} // Unique key for the user text
            variants={{
              hidden: { x: -150, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
            className="user"
          >
            <span className="block font-bold text-lg">
              {testimonials[currReview].name},
            </span>{" "}
            {testimonials[currReview].designation} at{" "}
            {testimonials[currReview].company}
          </motion.div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {testimonials.map((item, idx) => (
            <motion.button
              key={`avatars-${currReview}-${idx}`}
              variants={{
                hidden: {
                  y: -50,
                  opacity: 0,
                  scale: 0.5,
                  transition: { duration: 0.5, delay: idx / 5 },
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: idx / 5 },
                },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ originX: 0.5, originY: 0.5 }}
              onClick={() => setCurrReview(idx)}
              className={`avatar rounded-full overflow-hidden border-2 ${
                idx === currReview
                  ? "border-primary scale-110"
                  : "border-transparent"
              }`}
            >
              <img src={imageUrlFor(item.image).url()} className="" />
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-6 button-group">
          {currReview > 0 && (
            <motion.button
              key={`button-${currReview}-prev`}
              variants={{
                hidden: {
                  scale: 0,
                  transition: { duration: 0.2 },
                },
                visible: {
                  scale: 1,
                  transition: { duration: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ originX: 0.5, originY: 0.5 }}
              disabled={currReview === 0}
              onClick={() => {
                setCurrReview((prevState) => prevState - 1);
              }}
            >
              <FiArrowLeft />
            </motion.button>
          )}
          {currReview !== testimonials.length - 1 && (
            <motion.button
              key={`button-${currReview}-next`}
              variants={{
                hidden: {
                  scale: 0,
                  transition: { duration: 0.2 },
                },
                visible: {
                  scale: 1,
                  transition: { duration: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ originX: 0.5, originY: 0.5 }}
              disabled={currReview === testimonials.length - 1}
              onClick={() => {
                setCurrReview((prevState) => prevState + 1);
              }}
            >
              <FiArrowRight />
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
