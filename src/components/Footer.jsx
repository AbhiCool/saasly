import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className=" bg-gray-900 text-white px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="space-y-2">
          <h1 className="font-bold text-xl ">
            <a href="/" className="hover:underline">
              SaaSly
            </a>
          </h1>
          <p className="text-sm text-gray-400">
            <FaRegCopyright className="inline" />
            2025 All rights reserved.
          </p>
          <p className="text-sm text-gray-400">Powered by Tailwind CSS</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-lg underline">Links</h4>
          <ul className="text-sm text-gray-300">
            <li className="hover:underline">
              <a href="#home">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Follow Us</h2>

          <ul
            className="flex justify-center md:justify-start
             space-x-4"
          >
            <li>
              <a className="social-media-icons" href="#">
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a className="social-media-icons" href="#">
                <FaTwitter size={30} />
              </a>
            </li>
            <li>
              <a className="social-media-icons" href="#">
                <FaInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
