import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Multiplayer Chess Game",
    img: "chess.jpeg",
    desc: "Real-time multiplayer chess with move validation using Socket.IO.",
    tech: "React, Socket.IO, JavaScript",
    github: "https://github.com/your-username/multiplayer-chess", 
  },
  {
    title: "Online Code Editor",
    img: "Code-Editor.jpeg",
    desc: "Web-based code editor supporting multiple languages using Judge0 CE API and Ace Editor.",
    tech: "React, Node.js, Monaco Editor, Judge0 CE API",
    github: "https://github.com/imsurykant18/online-code-editor",
  },
  {
    title: "Smart Study Companion",
    img: "Study.jpeg",
    desc: "AI-powered study platform with personalized resources and quizzes using Gemini API.",
    tech: "React, MongoDB, Gemini API",
    github: "https://github.com/imsurykant18/smart-study-companion",
  },
   {
    title: "URL-Shortner",
    img: "urltittle.jpeg",
    desc: "A scalable URL shortener service that converts long links into short, shareable ones using a custom base-62 encoding strategy.",
    tech: "JavaScript, TurboRepo, MongoDB,",
    github: "https://github.com/imsurykant18/URL-Shortner",
  },
    {
    title: "Personal Portfolio Website",
    img: "portfolio.jpeg",
    desc: "Responsive personal portfolio to showcase skills, projects, and achievements.",
    tech: "React, TailwindCSS, Framer Motion",
    github: "https://github.com/your-username/portfolio-website",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 px-6 bg-gray-950 text-white">
    <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">Projects</h2>
    <div className="grid md:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          key={index}
          className="imageContainer relative h-72 rounded-2xl overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assests/images/${project.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent p-5 flex flex-col justify-end h-full">
            <h3 className="text-xl font-semibold text-cyan-300">{project.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{project.desc}</p>
            <p className="mt-2 text-xs text-cyan-400 italic">{project.tech}</p>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-lg shadow hover:bg-cyan-600 transition"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-gray-700 text-white text-sm rounded-lg shadow hover:bg-gray-600 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
