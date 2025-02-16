"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faRobot,
  faComments,
  faHeadset,
  faChartLine,
  faCalendarAlt,
  faBullseye,
  faCog,
  faSmile,
  faBook,
  faTags,
  faUserGraduate,
  faVideo,
  faLanguage,
  faUserCheck,
  faCubes,
  faMagic,
  faImage,
  faFilter,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

interface Service {
  name: string;
  description: string;
  icon: any;
}

const services: Service[] = [
  { name: "AI Agents", description: "AI-powered automation for business tasks.", icon: faRobot },
  { name: "Smart Chatbots", description: "Instant AI-driven conversations.", icon: faComments },
  { name: "Voice Bots", description: "Voice AI for hands-free communication.", icon: faHeadset },
  { name: "Predictive Analytics", description: "Data-driven future insights.", icon: faChartLine },
  { name: "Automated Scheduling", description: "Seamless appointment booking.", icon: faCalendarAlt },
  { name: "Personalized Marketing", description: "AI-enhanced campaign targeting.", icon: faBullseye },
  { name: "Workflow Automation", description: "Efficient process automation.", icon: faCog },
  { name: "Customer Sentiment Analysis", description: "Real-time feedback insights.", icon: faSmile },
  { name: "AI Knowledge Bases", description: "Smart self-service knowledge.", icon: faBook },
  { name: "Dynamic Pricing", description: "AI-driven pricing optimization.", icon: faTags },
  { name: "Employee Onboarding Assistants", description: "AI-powered training solutions.", icon: faUserGraduate },
  { name: "AI Video Analytics", description: "Real-time video insights.", icon: faVideo },
  { name: "Multilingual Support", description: "AI-powered language translation.", icon: faLanguage },
  { name: "Customer Churn Prediction", description: "AI to reduce customer loss.", icon: faUserCheck },
  { name: "Inventory Optimization", description: "Smart stock management.", icon: faCubes },
  { name: "AI Content Generation", description: "Automated high-quality content.", icon: faMagic },
  { name: "Image Recognition", description: "AI-based image analysis.", icon: faImage },
  { name: "Sales Lead Scoring", description: "AI-prioritized sales leads.", icon: faFilter },
  { name: "Call Center Optimization", description: "AI-enhanced call analytics.", icon: faPhoneVolume },
];

const ServicePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, centerPadding: "0px" } },
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "0px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "0px" } },
    ],
  };

  const faqs = [
    {
      question: "How quickly can Amplify AI solutions be implemented?",
      answer: "Our team focuses on faster deployment timelines while ensuring quality and precision, so you can see results quickly.",
    },
    {
      question: "Is Amplify AI suitable for my industry?",
      answer: "Yes! While we specialize in e-commerce, finance, retail, and professional services, our tailored solutions can adapt to almost any industry.",
    },
    {
      question: "Do I need technical expertise to use Amplify AI?",
      answer: "Not at all! We make AI accessible and easy to integrate, even for teams with no prior technical experience.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title */}
        <motion.h1
          className="text-6xl font-extrabold text-orange-600 dark:text-orange-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Top Services
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover AI-driven solutions tailored for your business.
        </motion.p>

        {/* Service Carousel */}
        <Slider {...sliderSettings} className="mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl text-center cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => setSelectedService(service)}
            >
              <FontAwesomeIcon icon={service.icon} className="text-orange-500 text-5xl" />
              <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">{service.name}</h3>
            </motion.div>
          ))}
        </Slider>

        {/* Selected Service Details */}
        {selectedService && (
          <motion.div
            className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedService.name}</h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">{selectedService.description}</p>
          </motion.div>
        )}

        {/* Call-To-Action Section */}
        <motion.div
          className="mt-16 py-12 px-8 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Amplify Your Business with AI?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join forward-thinking businesses unlocking their potential with Amplify AI.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Join the Waiting List
          </motion.button>
        </motion.div>

        {/* FAQs Section */}
        <div className="mt-20 text-left">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
