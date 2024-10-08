"use client";
import Script from "next/script";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa"; // Ensure to install react-icons if you haven't already

export default function BookAppointment() {
  return (
    <>
      <div id="book" className="flex justify-center py-20 bg-gray-100">
        <motion.button
          onClick={() =>
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/tanmayshahee/30min",
            })
          }
          className="flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg w-full sm:w-auto transition-transform duration-300 hover:bg-green-600"
          whileTap={{ scale: 0.95 }} // Scale down on click
        >
          <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
          Book Appointment
        </motion.button>
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </>
  );
}
