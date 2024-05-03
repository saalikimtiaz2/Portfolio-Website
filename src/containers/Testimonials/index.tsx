"use client";

import { testimonialTypes } from "@/interfaces/sanity";
import { imageUrlFor } from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
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
        <div className="text-lg mt-32 body relative z-50">
          <img src="icons/qoutes.svg" className="qoute" />
          <PortableText value={[...testimonials[currReview].review]} />
        </div>

        <p className="user">
          <span className="block font-bold text-base">
            {testimonials[currReview].name},
          </span>{" "}
          {testimonials[currReview].designation} at{" "}
          {testimonials[currReview].company}
        </p>

        <div className="flex items-center gap-4 mt-4">
          {testimonials.map((item, idx) => (
            <div
              onClick={() => setCurrReview(idx)}
              className={`avatar rounded-full overflow-hidden ${
                idx === currReview && " border border-primary"
              }`}
            >
              <img src={imageUrlFor(item.image).url()} className="" />
            </div>
          ))}
        </div>
        <div className="flex itemes-center gap-4 mt-6 button-group">
          {currReview > 0 && (
            <button
              disabled={currReview === 0}
              onClick={() => {
                setCurrReview((prevState) => prevState - 1);
              }}
            >
              <FiArrowLeft />
            </button>
          )}
          {currReview !== testimonials.length - 1 && (
            <button
              disabled={currReview === testimonials.length - 1}
              onClick={() => {
                setCurrReview((prevState) => prevState + 1);
              }}
            >
              <FiArrowRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
