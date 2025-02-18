'use client';

import { FaRobot, FaBolt, FaBrain } from 'react-icons/fa';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import JoinWaitlistButton from '@/components/ui/joinwaitlist';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQItem from '@/components/FAQItem';

const SEOKeywordsSection = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-16 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-900 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SEO-Optimized Keywords
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12 text-blue-700 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Optimize your content with top industry keywords to improve your search engine rankings and attract more organic traffic.
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: 'AI Customer Support Solutions',
              description: 'Enhance your customer support system with AI-driven solutions that provide 24/7 assistance, improving efficiency and customer satisfaction.',
            },
            {
              title: 'AI Chatbots for E-commerce',
              description: 'Boost your e-commerce business by integrating AI chatbots that can handle customer inquiries, process orders, and provide personalized recommendations.',
            },
            {
              title: 'Automation Tools for Businesses',
              description: 'Streamline operations and enhance productivity with AI-powered automation tools tailored for businesses across industries.',
            },
            {
              title: 'Save Time and Grow Revenue with AI',
              description: 'Leverage the power of AI to save valuable time while increasing revenue through smarter decision-making and efficient operations.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
              <p className="text-blue-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const CallToAction = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-blue-100 to-blue-200 py-16 px-6 md:px-16 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to Amplify Your Business with AI?
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl mb-12 text-blue-700 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Join forward-thinking businesses unlocking their potential with Amplify AI.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <JoinWaitlistButton />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const WhatSetsUsApart = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-16 rounded-lg shadow-lg max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h2
        className="text-center text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        What Sets Us Apart?
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            title: 'Best AI Technology',
            description:
              'Built on cutting-edge AI technology that understands and responds like a human, using advanced tools to analyze and process language naturally.',
            icon: <FaBolt className="text-6xl text-yellow-500 mb-4" />,
          },
          {
            title: 'Global Expertise',
            description:
              'Delivering AI solutions to businesses across the world, ensuring scalable success and future-proof technologies.',
            icon: <FaRobot className="text-6xl text-green-500 mb-4" />,
          },
          {
            title: 'Measurable Outcomes',
            description:
              'Achieve tangible results, from cost savings to revenue growth, with clear and quantifiable business improvements driven by our AI solutions.',
            icon: <FaBrain className="text-6xl text-blue-500 mb-4" />,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {item.icon}
            <h3 className="text-2xl font-semibold mt-6 text-blue-800">{item.title}</h3>
            <p className="text-blue-600 mt-4">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

const Home = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen text-black py-24 px-8">
      <MaxWidthWrapper>
        <motion.div className="space-y-24">
          {/* Hero Section */}
          <header className="text-center">
            <motion.h1
              className="text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              AMPLIFY AI
            </motion.h1>
            <motion.h2
              className="text-5xl font-bold mt-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to the Future of AI-Driven Success 🚀
            </motion.h2>
            <motion.p
              className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Transform your business with cutting-edge AI solutions that drive growth, save time, and amplify success.
            </motion.p>

            {/* Call to Action Button - Centered */}
            <motion.div className="mt-12 flex justify-center">
              <Link href="/waitlist">
                <motion.button
                  className="bg-black text-white text-lg px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Waitlist 🚀
                </motion.button>
              </Link>
            </motion.div>
          </header>

          {/* Why Amplify AI Section */}
          <section className="text-center">
            <WhatSetsUsApart />
          </section>

          {/* Call to Action */}
          <CallToAction />

          {/* FAQ Section */}
          <section className="text-center mt-16">
            <motion.h2
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              FAQs
            </motion.h2>
            <motion.div className="mt-8 space-y-6 max-w-3xl mx-auto">
              {[
                {
                  question: 'How quickly can Amplify AI solutions be implemented?',
                  answer: 'Our solutions are designed for rapid deployment, so you can start seeing results in a matter of weeks, not months.',
                },
                {
                  question: 'Is Amplify AI suitable for my industry?',
                  answer: 'Absolutely! Whether you’re in e-commerce, finance, retail, or other sectors, we tailor our solutions to fit your needs.',
                },
                {
                  question: 'Do I need technical expertise to use Amplify AI?',
                  answer: 'No, our platform is user-friendly, designed to be easy for teams without technical experience to use effectively.',
                },
              ].map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          </section>

          {/* SEO Keywords */}
          <SEOKeywordsSection />
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Home;
