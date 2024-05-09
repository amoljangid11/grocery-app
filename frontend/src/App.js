/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import RestaurantList from "./components/RestaurantList";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle dark mode state
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <header>
        <Home toggleDarkMode={toggleDarkMode} />
      </header>

      <main className="container mx-auto px-6 py-16">
        <Router>
          <Routes>
            {/* Render RestaurantList component when URL matches / */}
            <Route path="/" element={<RestaurantList />} />

            {/* Render Cart component when URL matches /cart */}
            <Route
              path="/cart"
              element={<Cart />}
              toggleDarkMode={toggleDarkMode}
            />
          </Routes>
        </Router>
      </main>

      <footer
        className={`bg-orange-500 ${
          isDarkMode ? "text-white" : "text-black"
        } py-6 px-6`}
      >
        <div className="flex justify-between items-center mb-6">
          {/* Left-aligned section for Contact Us and About Us */}
          <div>
            <a href="#" className="text-bold text-lg">
              Contact Us
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-bold text-lg">
              About Us
            </a>
          </div>

          {/* Center-aligned section for company name */}
          <div className="text-center">
            <p
              className="text-3xl font-bold"
              style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
            >
              Potato
            </p>
            <p className="text-xl font-normal">@Delta6Labs Tech</p>
          </div>
        </div>

        {/* Bottom-aligned section for rights text */}
        <p className="text-xl text-center">All rights reserved @ 2024</p>
      </footer>
    </div>
  );
}

export default App;
