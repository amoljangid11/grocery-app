import React from "react";
import Header from "./Header";

const Home = ({ toggleDarkMode }) => {
  // Receive toggleDarkMode prop

  return (
    <div>
      <Header toggleDarkMode={toggleDarkMode} />{" "}
      {/* Pass toggleDarkMode prop down */}
    </div>
  );
};

export default Home;
