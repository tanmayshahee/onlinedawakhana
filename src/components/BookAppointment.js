"use client";
import Script from "next/script";

export default function BookAppointment() {
  return (
    <>
      <div id="book" className="text-center py-20 bg-gray-100">
        <button
          onClick={() =>
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/tanmayshahee/30min",
            })
          }
          className="bg-green-500 text-white px-8 py-3 rounded-lg w-full sm:w-auto"
        >
          Book Appointment
        </button>
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </>
  );
}
