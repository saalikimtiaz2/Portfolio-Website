"use client";
import JobCard from "@/components/JobCard";
import Modal from "@/components/Modal";
import { jobTypes } from "@/interfaces/sanity";
import { useState } from "react";

function About({ jobs }: { jobs: jobTypes[] }) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <>
      <p className="about">
        👋🏻Hello! I'm Salik,{" "}
        <span className="inline-block mb-1 mr-4 bg-indigo-700 h-[3px] w-12 " />a
        creative and driven web developer with{" "}
        <button
          className="inline-block btn-link hover:underline z-50"
          onClick={toggleModal}
        >
          3 years of experience
        </button>{" "}
        in the field. I thrive on turning imaginative ideas into digital
        realities, constantly seeking innovative ways to blend design and
        technology.
      </p>
      <Modal
        open={openModal}
        closeModal={toggleModal}
        title="Employment History"
      >
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </Modal>
    </>
  );
}

export default About;
