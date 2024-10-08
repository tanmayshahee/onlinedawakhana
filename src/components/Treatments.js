import Image from "next/image";
import hairLoss from "../../public/hair-loss-issue.jpeg";
import skinIssue from "../../public/skin-issue.jpeg";
import respiratoryIssue from "../../public/respiratory-issue.jpeg";

const treatments = [
  { name: "Skin Conditions", image: skinIssue },
  { name: "Respiratory Issues", image: respiratoryIssue },
  { name: "Hair Loss", image: hairLoss },
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
