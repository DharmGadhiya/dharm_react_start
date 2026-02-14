import React from "react";
// =============================
// Hero Section
// =============================
function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-gray-100">
      <h2 className="text-5xl font-bold mb-6">Build Something Amazing</h2>
      <p className="text-lg max-w-2xl mb-6 text-gray-600">
        This is a static frontend clone layout made only for learning UI structure using Tailwind CSS.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
        Get Started
      </button>
    </section>
  );
}
export default Hero;