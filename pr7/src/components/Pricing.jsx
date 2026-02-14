import React from "react";

// =============================
// Pricing Section
// =============================
function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <h3 className="text-3xl font-bold text-center mb-12">Pricing</h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Basic", "Pro", "Enterprise"].map((plan) => (
          <div key={plan} className="border border-gray-200 p-8 rounded-2xl text-center hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-bold mb-4">{plan}</h4>
            <p className="text-4xl font-bold mb-6">₹999</p>
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Pricing;