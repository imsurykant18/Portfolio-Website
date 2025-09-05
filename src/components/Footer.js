import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-center text-gray-400">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} Surykant Bhojane. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;