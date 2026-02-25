import React from "react";
import Footer from "../components/visual/HomeComponents/Footer";
import Navbar from "../components/visual/HomeComponents/Navbar";
import AllProjectCards from "../components/visual/ProjectComponents/AllProjectCards";

function AllProjects() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <div className="pt-16">
        <AllProjectCards />
      </div>
      <Footer />
    </div>
  );
}

export default AllProjects;
