import React from "react";

// =============================
// Features Section
// =============================
function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12">Features</h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-semibold mb-4">Feature {item}</h4>
            <p className="text-gray-600">
              Static UI feature card for learning layout and component structure.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}



export default Features;