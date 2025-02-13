import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          WaysAhead Global
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex gap-6 absolute md:static left-0 right-0 bg-blue-900 md:bg-transparent transition-all duration-300 ${
            isOpen ? "top-16 p-4" : "-top-60"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/use-cases" className="hover:text-gray-300">
              Use Cases
            </Link>
          </li>
          <li>
            <Link to="/careers" className="hover:text-gray-300">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-gray-300">
              News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
