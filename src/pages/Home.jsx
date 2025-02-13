import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Home = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { text: 'Hello! How can I assist you today?', fromAI: true },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const sendMessageToAI = async () => {
    if (!userMessage.trim()) return;
    setIsLoading(true);
    setChatMessages([
      ...chatMessages,
      { text: userMessage, fromAI: false },
    ]);
    setUserMessage('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: userMessage,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`, // Replace with your OpenAI API key
          },
        }
      );

      setChatMessages([
        ...chatMessages,
        { text: userMessage, fromAI: false },
        { text: response.data.choices[0].text, fromAI: true },
      ]);
    } catch (error) {
      console.error('Error fetching from OpenAI:', error);
      setChatMessages([
        ...chatMessages,
        { text: 'Sorry, there was an error. Please try again.', fromAI: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-6">
      {/* Hero Section */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-blue-900 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Transforming Businesses with AI & Data Analytics
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover AI-driven solutions tailored for Fintech, Retail, Mobility, and more.
      </motion.p>

      <motion.button
        className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore Services
      </motion.button>

      {/* Chatbot Section */}
      <motion.div
        className="mt-12 w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Chat with AI
        </h2>

        <div className="h-60 overflow-y-auto mb-4">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 p-3 rounded-lg ${
                msg.fromAI
                  ? 'bg-blue-100 text-blue-900'
                  : 'bg-gray-200 text-gray-900'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex">
          <input
            type="text"
            value={userMessage}
            onChange={handleUserMessageChange}
            className="w-full p-3 border rounded-l-lg"
            placeholder="Ask me anything..."
          />
          <button
            onClick={sendMessageToAI}
            disabled={isLoading}
            className="px-6 py-3 bg-blue-900 text-white rounded-r-lg disabled:bg-gray-400"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {[{ title: "AI Shop Assist", desc: "Enhancing customer experience with AI-powered recommendations." }, { title: "Geo-Spatial Analytics", desc: "Unlocking location intelligence for better decision-making." }, { title: "SCM Analytics", desc: "Optimizing supply chains with real-time data insights." }].map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className="mt-16 w-full bg-blue-50 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Technologies We Use</h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto max-w-7xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {[
            { title: "Artificial Intelligence", image: "https://i.imghippo.com/files/aQsv9761OWo.jpg" },
            { title: "Machine Learning", image: "https://i.imghippo.com/files/UpL2916sdw.jpg" },
            { title: "Data Analytics", image: "https://i.imghippo.com/files/gdGe5809qmk.png" },
            { title: "Cloud Computing", image: "https://i.imghippo.com/files/kQ9863Qg.jpg" },
            { title: "Blockchain", image: "https://i.imghippo.com/files/zslp6957vVg.png" },
            { title: "IoT", image: "https://i.imghippo.com/files/epTb3166Ok.png" },
            { title: "Big Data", image: "https://i.imghippo.com/files/qdf9780oGU.jpg" },
            { title: "Robotic Process Automation", image: "https://i.imghippo.com/files/oEcX8322cR.jpg" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-blue-900">{tech.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
