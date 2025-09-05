import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-16 px-6 bg-gray-950 text-white text-center">
    <motion.h2
      className="text-4xl font-bold text-cyan-400 mb-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>

    <motion.p
      className="max-w-3xl mx-auto text-lg text-gray-300 mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
    >
      I'm a Computer Science student at Chandigarh University (CGPA: 8.08/10), passionate about full-stack development, real-time applications, and solving DSA problems. I've completed 250+ coding challenges and built AI-enhanced and multiplayer web projects.
    </motion.p>

    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <motion.div
        className="bg-gray-800 p-6 rounded-xl shadow-md text-left text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4">🎓 Class 12</h3>
        <p><strong>School:</strong> [Jay Bajarang Vidyalay, Akola]</p>
        <p><strong>Year:</strong> 2021 | <strong>Percentage:</strong> 91.5%</p>
        <p><strong>Stream:</strong> Science (PCM)</p>
      </motion.div>
      <motion.div
        className="bg-gray-800 p-6 rounded-xl shadow-md text-left text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4">🎓 Class 10</h3>
        <p><strong>School:</strong> [Sahakar Vidya Mandir, Motala]</p>
        <p><strong>Year:</strong> 2019 | <strong>Percentage:</strong> 90.4%</p>
        <p><strong>Board:</strong> MSBSHSE</p>
      </motion.div>
    </div>
  </section>
);

export default About;