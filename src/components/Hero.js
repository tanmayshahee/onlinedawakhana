import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-fixed"
      style={{ backgroundImage: 'url("/hero-image.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <motion.div
        className="text-center text-white z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Here Good Health Comes Naturally</h1>
        <p className="mt-4 text-xl">Book your appointment with us today</p>
        <motion.a
          href="#book"
          className="mt-8 inline-block bg-green-500 text-white px-6 py-3 rounded-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Book Now
        </motion.a>
      </motion.div>
    </section>
  );
}
