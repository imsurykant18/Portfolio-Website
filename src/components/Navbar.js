import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-950 shadow-md fixed w-full z-50">
      <h1 className="text-xl font-bold text-cyan-400 cursor-pointer" onClick={() => scrollToSection("home")}>
        Surykant Bhojane
      </h1>
      <div className="space-x-6 text-white font-medium">
        {["about", "skills", "projects", "achievements", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="hover:text-cyan-400 transition"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;