import Image from "next/image";
import heroImage from "../../public/hero-image.jpg"; // Image placeholder

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center py-10 bg-gray-100">
      <div className="lg:w-1/2 px-5 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Here Good Health Comes Naturally
        </h2>
        <p className="text-lg mb-6">
          Explore our treatments for natural health and wellness. Book an
          appointment today!
        </p>
        <a
          href="#book"
          className="bg-green-500 text-white px-6 py-2 rounded-lg"
        >
          Book Appointment
        </a>
      </div>
      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <Image
          src={heroImage}
          alt="Natural Health"
          className="rounded-lg w-full h-auto"
        />
      </div>
    </section>
  );
}
