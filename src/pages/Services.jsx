import { motion } from "framer-motion";

const services = [
  {
    title: "AI Shop Assist",
    description: "Enhancing customer experience with AI-powered recommendations.",
    image: "https://i.imghippo.com/files/jFGe3470cA.jpg",
  },
  {
    title: "Geo-Spatial Analytics",
    description: "Unlocking location intelligence for better decision-making.",
    image: "https://i.imghippo.com/files/B4363VXQ.jpg",
  },
  {
    title: "In-Store Analytics",
    description: "Optimizing retail spaces with real-time data insights.",
    image: "https://i.imghippo.com/files/mDEy7966Uec.jpg",
  },
  {
    title: "SCM Analytics",
    description: "Improving supply chain efficiency with predictive analytics.",
    image: "https://i.imghippo.com/files/ooXi7389Mfw.jpg",
  },
  {
    title: "Video Analytics",
    description: "Leveraging AI to analyze video data for security & insights.",
    image: "https://i.imghippo.com/files/lsGF1502V.png",
  },
  {
    title: "Robotics",
    description: "Integrating AI-driven robotics for automation and efficiency.",
    image: "https://i.imghippo.com/files/VFL4672do.jpg",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center text-center p-6">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-blue-900 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our AI-Driven Solutions
      </motion.h1>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={service.image} alt={service.title} className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
