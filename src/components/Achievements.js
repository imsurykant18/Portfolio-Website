import React from "react";
import { motion } from "framer-motion";

const achievements = [
  "Solved 350+ coding problems across platforms",
  "Ranked 4th in Coding Conquest (Chandigarh University)",
  "Built 5+ full-stack projects with real-time features",
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-6 bg-gray-900 text-white">
      <motion.h2
        className="text-4xl font-bold text-center text-cyan-400 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.h2>
      <ul className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300">
        {achievements.map((item, index) => (
          <motion.li
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-md hover:scale-[1.02] transition"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;