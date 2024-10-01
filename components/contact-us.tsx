"use client";

import { useState } from "react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="w-full rounded-sm shadow-three" data-wow-delay=".15s ">
      <h2 className="mb-3 text-2xl font-bold sm:text-3xl lg:text-2xl xl:text-3xl">
        Need Help?
      </h2>
      <p className="mb-12 text-base font-medium text-body-color text-justify leading-6 md:leading-7">
        {
          "We'd love to hear from you! Whether you have questions about our investment portfolio, are interested in partnership opportunities, or just want to learn more about Lima Holdings, our team is here to help. Reach out to us today, and let's explore how we can move forward together."
        }
      </p>
      <form onSubmit={handleSubmit}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label htmlFor="name" className="mb-3 block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full rounded-sm border border-gray-300 px-6 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label htmlFor="email" className="mb-3 block text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-sm border border-gray-300 px-6 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full px-4">
            <div className="mb-8">
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your message"
                className="w-full resize-none rounded-sm border border-gray-300 px-6 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="w-full px-4">
            <button
              type="submit"
              className="rounded-sm bg-primary px-16 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
