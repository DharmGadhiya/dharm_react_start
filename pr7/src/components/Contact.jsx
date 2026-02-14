import React from "react";  

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12">Contact Us</h3>

      <form className="max-w-xl mx-auto flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-200 p-3 rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white py-3 rounded-xl hover:scale-105 transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
} 
 export default Contact;