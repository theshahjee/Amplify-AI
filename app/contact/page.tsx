"use client";

import React, { useState } from "react";

const ContactPage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  // Input Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear errors as the user types
  };

  // Form Validation
  const validateForm = () => {
    const errors: any = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) errors.phone = "Phone Number is required.";
    if (!formData.company.trim()) errors.company = "Company Name is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  // Form Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(""); // Clear previous errors
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (Replace with actual API call)
    try {
      // Simulated API request (replace with your endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setSubmissionError("There was an issue submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Amplify AI</h1>

        {/* Introduction Section */}
        <p className="mt-4 text-lg text-gray-600 text-center">
          Have questions, need more information, or want to learn how Amplify AI can help your business grow smarter?
          We’re here to help! Reach out to us, and our team will get back to you promptly.
        </p>

        {/* Contact Form Section */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-12 p-8 bg-white shadow-md rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>

            {/* Full Name Field */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`mt-1 block w-full px-4 py-2 border ${
                  formErrors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
            </div>

            {/* Email Address Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`mt-1 block w-full px-4 py-2 border ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={`mt-1 block w-full px-4 py-2 border ${
                  formErrors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
            </div>

            {/* Company Name Field */}
            <div className="mb-4">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                className={`mt-1 block w-full px-4 py-2 border ${
                  formErrors.company ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {formErrors.company && <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you? Please provide details about your query."
                rows={4}
                className={`mt-1 block w-full px-4 py-2 border ${
                  formErrors.message ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:bg-gray-400"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Submission Error */}
            {submissionError && (
              <p className="text-red-500 text-sm mt-4 text-center">{submissionError}</p>
            )}
          </form>
        ) : (
          // Confirmation Message
          <div className="mt-12 p-8 bg-gray-100 text-center rounded-md shadow">
            <h3 className="text-2xl font-semibold text-gray-800">
              Thank you for reaching out!
            </h3>
            <p className="mt-2 text-lg text-gray-600">
              A member of our team will respond to your query as soon as
              possible. In the meantime, feel free to explore more about Amplify AI.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
