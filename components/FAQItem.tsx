import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="bg-white shadow-xl rounded-2xl p-6 mt-6 transition-all duration-500 ease-in-out hover:scale-105"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAnswer}
      >
        <motion.h4
          className="text-2xl font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {question}
        </motion.h4>
        <motion.div
          className="text-xl text-gray-600"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 text-lg">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FAQItem;
