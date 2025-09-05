import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 pt-20 overflow-hidden">

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          initial={{ x: -40 }}
          animate={{ x: 0 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full"
          style={{
            width: '200%',
            backgroundImage: `
              radial-gradient(circle at 30% 30%, #10b981 2px, transparent 2px),
              radial-gradient(circle at 70% 70%, #059669 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Your content needs a higher z-index to appear on top */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="text-5xl font-extrabold text-cyan-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Surykant Bhojane
        </motion.h1>

        <motion.p
          className="mt-4 text-xl text-gray-300 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A Computer Science student who loves building real-time web apps, solving DSA problems, and exploring full-stack development.
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-cyan-600 transition"
        >
          Let's Connect
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;