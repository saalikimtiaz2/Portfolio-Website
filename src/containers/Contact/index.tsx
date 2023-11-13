"use client";
import Modal from "@/components/Modal";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className="contact bg-black text-white">
      <h4>Let&apos;s work togather</h4>
      <a href="mailto:r.salikimtiaz@gmail.com">
        <button>
          <BsArrowRight />
        </button>
      </a>

      <Modal open={showModal} closeModal={toggleModal} title="Contact">
        r.salikimtiaz@gmail.com
      </Modal>
    </div>
  );
}

export default Contact;
