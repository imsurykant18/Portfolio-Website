import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiHtml5, SiCss3, SiMongodb, SiTailwindcss, SiJavascript, SiCplusplus, SiExpress } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { SiGamejolt } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const skills = [
  { icon: <SiCplusplus size={40} />, name: "C++" },
  { icon: <SiMysql size={40} />, name: "SQL" },
  { icon: <SiJavascript size={40} />, name: "JavaScript" },
  { icon: <SiHtml5 size={40} />, name: "HTML5" },
  { icon: <SiCss3 size={40} />, name: "CSS3" },
  { icon: <FaReact size={40} />, name: "React.js" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
  { icon: <SiExpress size={40} />, name: "Express.js" },
  { icon: <SiMongodb size={40} />, name: "MongoDB" },
  { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
  { icon: <FaGitAlt size={40} />, name: "Git" },
  { icon: <SiGamejolt size={40} />, name: "Unity Engine" },
];

const Skills = () => (
  <section id="skills" className="py-16 px-6 bg-gray-900 text-white">
    <motion.h2
      className="text-4xl font-bold text-center text-cyan-400 mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Skills & Tools
    </motion.h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-cyan-400 mb-2">{skill.icon}</div>
          <p className="text-sm font-medium text-gray-200">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;