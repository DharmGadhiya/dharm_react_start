import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import ContactPage from "./pages/ContactPage"
import PricingPage from "./pages/PricingPage"




import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
