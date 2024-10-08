import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-500 p-5">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-bold text-white mb-4 sm:mb-0">
          Online Dawakhana
        </h1>
        <nav>
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#treatments" className="text-white">
                Treatments
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <a
          href="#book"
          className="bg-white text-green-500 px-4 py-2 mt-4 sm:mt-0 rounded-lg"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}
