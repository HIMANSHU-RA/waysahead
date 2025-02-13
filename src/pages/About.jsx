import { motion } from "framer-motion";

const leadershipTeam = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "Chief AI Officer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mark Johnson",
    role: "Head of Data Analytics",
    image: "https://via.placeholder.com/150",
  },
];

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col items-center justify-center text-center p-6">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-blue-900 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About WaysAhead Global
      </motion.h1>

      {/* Company Mission */}
      <motion.p
        className="text-lg text-gray-700 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We are a global leader in AI & Data Analytics, driving innovation across industries with cutting-edge technology.
      </motion.p>

      {/* Leadership Team */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {leadershipTeam.map((leader, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">{leader.name}</h3>
            <p className="text-gray-600">{leader.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
