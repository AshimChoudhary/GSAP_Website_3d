import React from "react";
import { FaDiscord, FaGithub, FaInstagram, FaTwitch } from "react-icons/fa";

const Links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://twitch.com", icon: <FaTwitch /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center gap-4 justify-between px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Akiba 2025. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {Links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
