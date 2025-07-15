import React from "react";

const ContactUs = () => {
  return (
    <section id="contactUs" className="py-12 px-6 bg-gray-800">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <div className="form flex justify-center">
        <form className="w-[80%] md:w-[50%]  p-4 space-y-5 border border-gray-200 mt-2 rounded shadow-lg">
          {/* <h1 className="font-bold text-center text-3xl">Contact Us</h1> */}
          <div className="w-full grid grid-cols-12 gap-5">
            <input
              className="col-span-12 md:col-span-6 p-2 border border-gray-200 rounded mr-[1%]"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <input
              className="col-span-12 md:col-span-6 p-2 border border-gray-200 rounded"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="w-full">
            <input
              className="w-full p-2 border border-gray-200 rounded"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="w-full">
            <textarea
              className="border border-gray-200 rounded w-full p-2 resize-none"
              name="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              id=""
              className="w-[20px] h-[20px]"
            />
            <span className="ml-1 text-gray-400 font-[500] text-sm">
              I agree to the terms and conditions
            </span>
          </div>
          <div className="w-full flex justify-end">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
