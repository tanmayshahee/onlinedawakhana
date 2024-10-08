"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 p-5">
      <motion.div
        className="container mx-auto flex justify-between items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo / Title */}
        <motion.h1
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.1 }}
        >
          Arinjai Clinic
        </motion.h1>

        {/* Burger Menu Icon */}
        <motion.button
          className="text-white block md:hidden focus:outline-none"
          onClick={toggleMenu}
          whileHover={{ rotate: 90 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </motion.button>

        {/* Navigation Menu */}
        <motion.nav
          className={`md:flex ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {["Treatments", "About", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2 }}
                className="text-white cursor-pointer"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        <motion.a
          href="#book"
          className="bg-white text-green-500 px-4 py-2 rounded-lg hidden md:block"
          whileHover={{ scale: 1.1 }}
        >
          Book Appointment
        </motion.a>
      </motion.div>
    </header>
  );
}
