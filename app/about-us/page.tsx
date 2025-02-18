"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FAQItem from "@/components/FAQItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faUsers,
  faGlobe,
  faChartLine,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  const faqs = [
    {
      question: "How quickly can Amplify AI solutions be implemented?",
      answer:
        "Our solutions are designed for rapid deployment, so you can start seeing results in a matter of weeks, not months.",
    },
    {
      question: "Is Amplify AI suitable for my industry?",
      answer:
        "Absolutely! We specialize in all industries. Our tailored solutions can adapt to almost any industry.",
    },
    {
      question: "Do I need technical expertise to use Amplify AI?",
      answer:
        "Not at all! We make AI accessible and easy to integrate, even for teams with no prior technical experience.",
    },
  ];

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <MaxWidthWrapper>
        <motion.div
          className="py-20 space-y-16"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Hero Section */}
          <motion.div variants={sectionVariants} className="text-center">
            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-wide text-gray-900"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Amplify AI
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Pioneering Smarter Business Growth with Cutting-Edge AI Solutions
            </motion.p>
          </motion.div>

          {/* Content Sections */}
          {[
            {
              title: "Our Expertise",
              content:
                "With a team of experienced AI developers and industry experts, we specialize in crafting solutions tailored to your unique needs.",
              icon: faBrain,
            },
            {
              title: "Who We Work With",
              content:
                "We collaborate with businesses across all industries, helping them scale with intelligent, automated solutions.",
              icon: faUsers,
            },
          ].map((section, index) => (
            <motion.section
              key={index}
              className="mb-16 flex items-center space-x-6"
              variants={sectionVariants}
            >
              <FontAwesomeIcon
                icon={section.icon}
                className="text-orange-500 text-4xl"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-lg text-gray-700">{section.content}</p>
              </div>
            </motion.section>
          ))}

          {/* Why Choose Us */}
          <motion.section className="mb-16" variants={sectionVariants}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Why Choose Amplify AI?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  text: "Experienced AI Developers",
                  icon: faBrain,
                },
                {
                  text: "Customized Solutions",
                  icon: faGlobe,
                },
                {
                  text: "Global Reach",
                  icon: faUsers,
                },
                {
                  text: "Proven Impact",
                  icon: faChartLine,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-md flex items-center space-x-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-orange-500 text-3xl"
                  />
                  <p className="text-lg text-gray-800">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mission Statement */}
          <motion.section
            className="mb-16 bg-white p-8 rounded-2xl shadow-md"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Mission
            </h2>
            <blockquote className="text-2xl italic text-gray-700">
              "To amplify business success through visionary AI solutions,
              empowering companies to thrive with smarter, scalable tools that
              deliver real impact."
            </blockquote>
          </motion.section>

          {/* Call to Action Section */}
          <motion.section
            className="text-center mb-20"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Amplify Your Success?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Take the first step toward smarter growth today.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
                asChild
              >
                <Link href="/waitlist">
                  <FontAwesomeIcon icon={faRocket} className="mr-2" />
                  Join the Waiting List
                </Link>
              </Button>
            </motion.div>
          </motion.section>

          {/* FAQs Section */}
          <motion.section variants={sectionVariants}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </motion.section>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
