"use client";
import JobCard from "@/components/JobCard";
import Modal from "@/components/Modal";
import {
  jobTypes,
  ProfileType,
  socialLinkTypes,
} from "@/interfaces/sanity";
import getIcon from "@/helpers/getIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const STATS = [
  { value: "3+", label: "Years of experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "10+", label: "Happy clients" },
];

function About({
  jobs,
  profile,
}: {
  jobs: jobTypes[];
  profile: ProfileType;
}) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const toggleModal = () => setOpenModal((prev) => !prev);

  return (
    <section
      id="about"
      className="section bg-ink-50 dark:bg-ink-950"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent/20 to-ink-300/30 blur-xl dark:to-ink-700/30" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink-200 bg-ink-100 dark:border-ink-800 dark:bg-ink-900">
                {profile.profileImage?.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.profileImage.image}
                    alt={profile.profileImage.alt || `${profile.firstName} ${profile.lastName}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                ) : null}
              </div>

              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-ink-200 bg-white p-4 shadow-card dark:border-ink-800 dark:bg-ink-900">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
                  Currently
                </p>
                <p className="mt-1 font-heading text-sm font-semibold text-ink-950 dark:text-ink-50">
                  Building beautiful UIs
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="section-eyebrow">About me</p>
            <h2 className="section-title max-w-xl">
              A creative engineer turning ideas into pixel-perfect products.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-400">
              Hi, I&apos;m {profile.firstName}. I&apos;m a frontend engineer
              with{" "}
              <button
                className="btn-link"
                onClick={toggleModal}
                aria-label="View employment history"
              >
                3+ years of experience
              </button>{" "}
              shipping production-grade web applications. I thrive on turning
              imaginative ideas into digital realities &mdash; constantly
              looking for ways to blend design and technology with care.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink-200 pt-8 dark:border-ink-800">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-semibold tracking-tight text-ink-950 dark:text-ink-50 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-500">
                Follow me
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.socialLinks?.map((social: socialLinkTypes) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-950 hover:bg-ink-950 hover:text-white dark:border-ink-800 dark:text-ink-300 dark:hover:border-ink-50 dark:hover:bg-ink-50 dark:hover:text-ink-950"
                  >
                    {getIcon(social.name)}
                  </Link>
                ))}
              </div>
              <button
                onClick={toggleModal}
                className="btn btn-ghost btn-sm ml-auto"
              >
                See experience
                <HiArrowUpRight aria-hidden />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal
        open={openModal}
        closeModal={toggleModal}
        title="Employment History"
      >
        <div className="space-y-2">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </Modal>
    </section>
  );
}

export default About;
