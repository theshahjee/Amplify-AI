"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-800 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md p-8 bg-white rounded-xl shadow-xl text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
          }}
          className="mb-6"
        >
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-blue-500 text-7xl"
          />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Congratulations!
        </h1>
        <p className="text-gray-600 mb-6">
          You’ve successfully joined our waitlist. Stay tuned for exciting
          updates and announcements. We're thrilled to have you on board!
        </p>
        <motion.a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
