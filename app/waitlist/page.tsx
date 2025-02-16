"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import JoinWaitlistButton from "@/components/ui/joinwaitlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    let data = await res.json();
    if (res.ok) {
      router.push("/success");
    } else {
      setMessage(data.message);
      setActive(true);
      setTimeout(() => {
        setActive(false);
        setMessage("");
      }, 3000);
    }
  };

  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <MaxWidthWrapper>
        {/* Hero Section */}
        <section className="text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Amplify AI
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Revolutionize your business with cutting-edge AI solutions designed
            to enhance productivity, streamline workflows, and drive growth.
            Join the future of smarter business decisions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <JoinWaitlistButton />
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="my-20">
          <motion.h2
            className="text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Why Choose Amplify AI?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/ai-agents-icon.png"
                alt="AI Agents"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">AI Agents</h3>
              <p className="text-gray-400">
                Automate repetitive tasks and enhance productivity with
                intelligent AI-driven assistants.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/predictive-analytics-icon.png"
                alt="Predictive Analytics"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-400">
                Harness data insights to make smarter, data-driven decisions for
                your business growth.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/chatbots-icon.png"
                alt="Smart Chatbots"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Smart Chatbots</h3>
              <p className="text-gray-400">
                Engage your customers with conversational AI that works 24/7 to
                support and assist.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Join Waitlist Section */}
        <section className="my-20">
          <motion.h2
            className="text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Join the Waitlist
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-8 text-gray-800"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col mb-6">
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg p-4">
                <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-4" />
                <input
                  placeholder="Full Name"
                  onChange={handleChange}
                  id="name"
                  type="text"
                  required
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 placeholder:font-bold"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="sr-only">
                Enter Email Address
              </label>
              <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg p-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-500 mr-4"
                />
                <input
                  placeholder="Enter Email Address"
                  onChange={handleChange}
                  id="email"
                  type="email"
                  required
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 placeholder:font-bold"
                />
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <button
                type="submit"
                className="w-full px-6 py-4 text-white font-bold bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg"
              >
                Join Waitlist
              </button>
            </motion.div>
          </motion.form>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingPage;
