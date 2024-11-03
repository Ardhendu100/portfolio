import React from "react";
import Footer from "../components/visual/HomeComponents/Footer";
import Navbar from "../components/visual/HomeComponents/Navbar";
import AllProjectCards from "../components/visual/ProjectComponents/AllProjectCards";

function AllProjects() {
  return (
    <div>
      <Navbar></Navbar>
      <AllProjectCards></AllProjectCards>
      <Footer></Footer>
    </div>
  );
}

export default AllProjects;
