import React, { useEffect, useState } from "react";
import FeaturedProjects from "../components/visual/HomeComponents/FeaturedProjects";
import Hero from "../components/visual/HomeComponents/Hero";
import Navbar from "../components/visual/HomeComponents/Navbar";
import Skills from "../components/visual/HomeComponents/Skills";
import Screen from "../components/terminal/Screen";
import Experience from "../components/visual/HomeComponents/Experience";
import Contact from "../components/visual/HomeComponents/Contact";
import Footer from "../components/visual/HomeComponents/Footer";
function Home() {
  const [keyPressed, setkeyPressed] = useState("");
  const [terminal, setterminal] = useState(false);
  function handleKeyPress(e) {
    const pressedKey = e.key.toLowerCase();
    setkeyPressed(keyPressed + pressedKey);
  }
  useEffect(() => {
    if (keyPressed.slice(-7) === "backend") {
      setterminal(true);
    }
  }, [keyPressed]);
  return terminal ? (
    <Screen></Screen>
  ) : (
    <div tabIndex={-1} onKeyUp={handleKeyPress}>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <FeaturedProjects></FeaturedProjects>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
export default Home;
