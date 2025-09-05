import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-950 text-white">
      <motion.h2
        className="text-4xl font-bold text-center text-cyan-400 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="flex flex-col items-center gap-2 text-lg text-gray-300 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>I'm currently open to full-stack and internship opportunities.</p>

        <p>
          Email: <a href="mailto:suryakantbhojane2503@gmail.com" className="text-cyan-400">suryakantbhojane2503@gmail.com</a>
        </p>

        <p>
          Phone: <a href="tel:+919307316598" className="text-cyan-400">+91 93073-16598</a>
        </p>

        <div className="flex space-x-6 text-cyan-400 mt-4 text-2xl">
          <a href="https://www.linkedin.com/in/surykant-bhojane-462795343" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/imsurykant18" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/Surykant_Bhojane/" target="_blank" rel="noopener noreferrer">
           <img
           src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
           alt="LeetCode"
           style={{ width: "24px", height: "24px" }}
           />
          </a>
          <a href="mailto:suryakantbhojane2503@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;