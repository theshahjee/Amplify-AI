"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FAQItem from "@/components/FAQItem";

const AboutPage = () => {
  const faqs = [
    {
      question: "How quickly can Amplify AI solutions be implemented?",
      answer: "Our solutions are designed for rapid deployment, so you can start seeing results in a matter of weeks, not months.",
    },
    {
      question: "Is Amplify AI suitable for my industry?",
      answer: "Absolutely! We specialize in all industries. Our tailored solutions can adapt to almost any industry.",
    },
    {
      question: "Do I need technical expertise to use Amplify AI?",
      answer: "Not at all! We make AI accessible and easy to integrate, even for teams with no prior technical experience.",
    },
  ];

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 text-white">
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
              className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-wide text-blue-100 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Amplify AI
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-blue-200 mt-4"
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
                "With a team of experienced AI developers and industry experts, we specialize in crafting solutions tailored to your unique needs. From AI agents and chatbots to voice bots and automation pipelines, we design seamless, scalable tools that work for you—even if your team has no technical expertise.",
            },
            {
              title: "Who We Work With",
              content:
                "We collaborate with businesses across all industries and professional niches. No matter your size or sector, we are dedicated to helping you grow smarter and achieve real, lasting results.",
            },
          ].map((section, index) => (
            <motion.section
              key={index}
              className="mb-16"
              variants={sectionVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-100">
                {section.title}
              </h2>
              <p className="text-lg text-blue-200 leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}

          {/* Why Choose Us */}
          <motion.section className="mb-16" variants={sectionVariants}>
            <h2 className="text-3xl font-bold mb-8 text-blue-100">
              Why Choose Amplify AI?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Experienced AI Developers: Cutting-edge NLP and predictive analytics",
                "Customised Solutions: Tailored to your industry needs",
                "Global Reach: Serving businesses worldwide",
                "Proven Impact: Faster ROI and seamless integration",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-blue-700 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-lg text-blue-200">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mission Statement */}
          <motion.section
            className="mb-16 bg-gradient-to-r from-blue-800 to-blue-900 p-8 rounded-2xl shadow-lg"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-100">
              Our Mission
            </h2>
            <blockquote className="text-2xl italic text-blue-200">
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
            <h2 className="text-3xl font-bold mb-6 text-blue-100">
              Ready to Amplify Your Success?
            </h2>
            <p className="text-xl mb-8 text-blue-200">
              Take the first step toward smarter growth today.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className="bg-gradient-to-br from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                asChild
              >
                <Link href="/waitlist">Join the Waiting List</Link>
              </Button>
            </motion.div>
          </motion.section>

          {/* FAQs Section */}
          <motion.section variants={sectionVariants}>
            <h2 className="text-3xl font-bold mb-8 text-blue-100">FAQs</h2>
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
