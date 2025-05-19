import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-cyan-800 to-green-700 text-white py-6 mt-12">
      <div className="container mx-auto text-center space-y-3">
        <div className="flex justify-center space-x-6 text-xl">
          <a
            href="https://github.com/ankitpal0065"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ankitpal0065/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-gray-300 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Ankit Pal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
