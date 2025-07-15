import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import CoreFeatures from "./components/CoreFeatures";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="home" className="bg-gray-900 text-gray-100 h-screen">
      {/* nav bar*/}
      <Navbar />

      {/* hero section */}
      <Hero />

      {/* core features */}
      <CoreFeatures />

      {/* pricing */}
      <Pricing />

      {/* contact us */}
      <ContactUs />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
