import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const useCases = [
  {
    industry: "Fintech",
    description: "AI-powered fraud detection and risk analysis.",
    image: "https://i.imghippo.com/files/iSOb3353vfA.png",
    link: "/use-cases/fintech",
  },
  {
    industry: "Retail",
    description: "Personalized shopping experiences using AI.",
    image: "https://i.imghippo.com/files/axB4209P.jpg",
    link: "/use-cases/retail",
  },
  {
    industry: "F&B",
    description: "Smart inventory management and customer analytics.",
    image: "https://i.imghippo.com/files/SFn5850Mg.jpg",
    link: "/use-cases/fnb",
  },
  {
    industry: "Mobility",
    description: "Optimizing transportation networks with AI-driven insights.",
    image: "https://i.imghippo.com/files/q6241H.png",
    link: "/use-cases/mobility",
  },
  {
    industry: "Entertainment",
    description: "AI-powered content recommendations and audience insights.",
    image: "https://i.imghippo.com/files/gFh5429t.jpg",
    link: "/use-cases/entertainment",
  },
];

const UseCases = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center text-center p-6">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-blue-900 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Industry Use Cases
      </motion.h1>

      {/* Use Cases Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={useCase.image} alt={useCase.industry} className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-900">{useCase.industry}</h3>
            <p className="text-gray-600 mt-2">{useCase.description}</p>
            <Link to={useCase.link} className="text-blue-600 mt-4 inline-block hover:underline">
              Learn More →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UseCases;
