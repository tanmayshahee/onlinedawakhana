import Image from "next/image";
import treatment1 from "../../public/hero-image.jpg"; // Replace with actual images

const treatments = [
  { name: "Skin Conditions", image: treatment1 },
  { name: "Respiratory Issues", image: treatment1 },
  { name: "Hair Loss", image: treatment1 },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Treatments For
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {treatments.map((treatment, index) => (
          <div key={index} className="text-center">
            <Image
              src={treatment.image}
              alt={treatment.name}
              className="rounded-full w-32 h-32 sm:w-48 sm:h-48 mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{treatment.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
