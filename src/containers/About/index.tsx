"use client";
import Modal from "@/components/Modal";
import { useState } from "react";

function About() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <>
      <p className="text-center sm:w-[35ch] mx-auto text-xl sm:text-3xl mdtext-4xl pt-12 z-50">
        👋🏻Hello! I'm Salik,{" "}
        <span className="inline-block mb-1 mr-4 bg-indigo-700 h-[3px] w-12 " />a
        creative and driven web developer with{" "}
        <button
          className="inline-block text-indigo-700 hover:underline z-50"
          onClick={toggleModal}
        >
          3 years of experience
        </button>{" "}
        in the field. I thrive on turning imaginative ideas into digital
        realities, constantly seeking innovative ways to blend design and
        technology.
      </p>
      <Modal open={openModal} closeModal={toggleModal} title="Work Experience">
        Hello
      </Modal>
    </>
  );
}

export default About;
