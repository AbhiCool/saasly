import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gray-900 py-12 px-6 flex flex-col-reverse md:flex-row justify-between items-center"
    >
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mt-4">
          Build your Saas website faster
        </h2>
        <p className="text-gray-400">
          Tailwind CSS lets you build modern, responsive designs without writing
          any custom CSS.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md ">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          className="rounded-lg shadow-md"
          src="https://cdn.pixabay.com/photo/2024/12/18/01/27/lightning-9274136_1280.jpg"
        />
      </div>
    </section>
  );
};

export default Hero;
