
"use client";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-center py-6 pb-8 md:pb-8 flex flex-col items-center gap-4">
      {/* Social links for mobile */}
      <div className="flex md:hidden gap-6 text-light-slate mb-2">
        <a
          href="#"
          className="hover:text-green transition-colors"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/anjali-jadhav-897443244"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green transition-colors"
        >
          <FiLinkedin size={20} />
        </a>
      </div>

      <div className="text-slate font-mono text-xs hover:text-green transition-colors">
        <a
          href="#"
          className="block mb-1"
        >
          Built by Anjali Jadhav
        </a>
        <p>Inspired by Brittany Chiang</p>
      </div>
    </footer>
  );
};

export default Footer;
