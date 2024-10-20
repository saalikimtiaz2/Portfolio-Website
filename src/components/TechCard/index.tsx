"use client";
import { motion } from "framer-motion";

const TechCard = ({ url, title }: { url: string; title: string }) => {
  const cardVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="xs:h-24 sm:h-28 xs:w-24 sm:w-28 flex items-center p-2 justify-center rounded-full shadow-inner dark:bg-neutral-700 bg-neutral-100 backdrop-blur-sm"
      >
        <img
          src={url}
          className="xs:h-14 sm:h-16 w-auto"
          alt={`${title}'s logo`}
        />
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-center mt-4"
      >
        {title}
      </motion.div>
    </div>
  );
};

export default TechCard;
