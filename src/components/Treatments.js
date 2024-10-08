import Image from "next/image";
import hairLoss from "../../public/hair-loss-issue.jpeg";
import skinIssue from "../../public/skin-issue.jpeg";
import respiratoryIssue from "../../public/respiratory-issue.jpeg";
import { motion } from "framer-motion";

// Define background colors for each treatment card
const treatments = [
  { name: "Skin Conditions", image: skinIssue, bgColor: "bg-green-100" },
  {
    name: "Respiratory Issues",
    image: respiratoryIssue,
    bgColor: "bg-blue-100",
  },
  { name: "Hair Loss", image: hairLoss, bgColor: "bg-yellow-100" },
];

export default function Treatments() {
  return (
    <motion.div
      className="section py-12"
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center">Our Treatments</h2>
      <p className="mt-4 text-center text-lg">
        We offer a variety of homeopathic treatments to improve your health.
      </p>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {treatments.map((treatment, index) => (
          <motion.div
            key={index}
            className={`text-center p-6 rounded-lg shadow-lg ${treatment.bgColor} transition duration-300 transform hover:scale-105 cursor-pointer`}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, delay: index * 0.2 }} // Adds a slight delay between cards
            whileHover={{ scale: 1.1 }}
          >
            {/* Image Section */}
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={treatment.image}
                alt={treatment.name}
                className="rounded-full w-32 h-32 sm:w-48 sm:h-48 mx-auto"
              />
            </motion.div>

            {/* Treatment Name */}
            <motion.h3
              className="text-xl font-semibold mt-4"
              whileHover={{ color: "#10B981" }}
            >
              {treatment.name}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
